import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { finalize } from 'rxjs';
import { ProductService, Product } from './remote-data.service';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { RemoteDataEditComponent } from './edit/edit.component';


@Component({
  selector: 'app-tables-remote-data',
  templateUrl: './remote-data.component.html',
  styleUrls: ['./remote-data.component.scss'],
  providers: [ProductService],
})
export class TablesRemoteDataComponent implements OnInit {
  columns: MtxGridColumn[] = [
    { header: 'ID', field: 'id' },
    { header: 'Product', field: 'product_name', width: '100px' },
    { header: 'Category', field: 'category_id' },
    { header: 'Value', field: 'product_value', type: 'number' },
    {
      header: 'Expiration Date',
      field: 'expiration_date',
      formatter: (data: any) => this.formatDate(data.expiration_date),
    },
    { header: 'Stock Quantity', field: 'stock_quantity', type: 'number' },
    { header: 'Perishable', field: 'perishable', type: 'boolean' },
    {
      header: 'Created Date',
      field: 'created_at',
      formatter: (data: any) => this.formatDate(data.created_at),
    },
    {
      header: 'Updated Date',
      field: 'updated_at',
      formatter: (data: any) => this.formatDate(data.updated_at),
    },
    {
      header: 'Operation',
      field: 'operation',
      minWidth: 140,
      width: '140px',
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          icon: 'edit',
          tooltip: this.translate.stream('table_kitchen_sink.edit'),
          click: record => this.edit(record),
        },
        {
          type: 'icon',
          color: 'warn',
          icon: 'delete',
          tooltip: this.translate.stream('table_kitchen_sink.delete'),
          pop: {
            title: this.translate.stream('table_kitchen_sink.confirm_delete'),
            closeText: this.translate.stream('table_kitchen_sink.close'),
            okText: this.translate.stream('table_kitchen_sink.ok'),
          },
          click: record => {
              this.delete(record)   
          },
        }
      ],
    },
  ];
  products: Product[] = [];
  total = 0;
  isLoading = true;


  query = {
    q: 'user:nzbin',
    sort: 'stars',
    order: 'desc',
    page: 0,
    per_page: 10,
  };

  get params() {
    const p = Object.assign({}, this.query);
    p.page += 1;
    return p;
  }

  constructor(private translate: TranslateService, private datePipe: DatePipe, private productService: ProductService, private dialog: MtxDialog) {}

  formatDate(dateString: string | null): string {
    if (!dateString) {
      return '-';
    }
    const parsedDate = new Date(dateString);
    return this.datePipe.transform(parsedDate, 'medium') || ''; 
  }

  ngOnInit() {
    this.loadProducts();
  }

  edit(record: any) {
    const dialogRef = this.dialog.originalOpen(RemoteDataEditComponent, {
      width: '600px',
      data: {Id: record.id, ...record },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadProducts();
      }
    });
  }

  delete(record: any) {
    this.productService.deleteProduct(record.id).subscribe(() => {
        this.loadProducts();
    });
  }

  loadProducts() {
    this.productService.getProducts(this.params).pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe(res => {
      this.products = res.products;
      this.total = res.total_count;
      this.isLoading = false;
    });
  }
 
  getNextPage(e: PageEvent) {
    this.query.page = e.pageIndex;
    this.query.per_page = e.pageSize;
    this.loadProducts();
  }
}

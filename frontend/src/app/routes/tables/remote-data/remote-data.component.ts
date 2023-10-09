import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { finalize } from 'rxjs';
import { ProductService, Product } from './remote-data.service';
import { DatePipe } from '@angular/common';

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
    }
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

  constructor(private datePipe: DatePipe, private productService: ProductService) {}

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

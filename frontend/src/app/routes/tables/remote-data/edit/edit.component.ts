import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../remote-data.service';

@Component({
  selector: 'app-table-kitchen-sink-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class RemoteDataEditComponent {
  editForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RemoteDataEditComponent>,
    private productService: ProductService, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editForm = this.fb.group({
      product_name: [data.product_name],
      category_id: [data.category_id],
      product_value: [data.product_value],
      expiration_date: [data.expiration_date],
      stock_quantity: [data.stock_quantity],
      perishable: [data.perishable !== null ? data.perishable : null]
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const editedProduct = {
        id: this.data.id,
        product_name: this.editForm.get('product_name')?.value,
        category_id: this.editForm.get('category_id')?.value,
        product_value: this.editForm.get('product_value')?.value,
        expiration_date: this.editForm.get('expiration_date')?.value,
        stock_quantity: this.editForm.get('stock_quantity')?.value,
        perishable: this.editForm.get('perishable')?.value
      };

      this.productService.editProduct(editedProduct.id, editedProduct).subscribe(() => {
        this.dialogRef.close(editedProduct);
      });
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
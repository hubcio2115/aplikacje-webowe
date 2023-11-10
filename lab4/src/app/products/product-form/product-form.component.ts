import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
  @Output() addProduct = new EventEmitter<string>();
  @Output() deleteCheckedProductsts = new EventEmitter<void>();

  newProduct = '';

  handleAddProduct(newProductBody: string) {
    this.addProduct.emit(newProductBody);
  }

  handleDeleteCheckedProducts() {
    this.deleteCheckedProductsts.emit();
  }
}

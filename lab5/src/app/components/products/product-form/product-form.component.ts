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
  @Output() public addProduct: EventEmitter<string> =
    new EventEmitter<string>();
  @Output() public deleteCheckedProductsts: EventEmitter<void> =
    new EventEmitter<void>();

  protected newProduct: string = '';

  protected handleAddProduct(newProductBody: string): void {
    this.addProduct.emit(newProductBody);
  }

  protected handleDeleteCheckedProducts(): void {
    this.deleteCheckedProductsts.emit();
  }
}

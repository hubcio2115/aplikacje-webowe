import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Product } from '../../shared/data';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductDetailsComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  @Input({ required: true }) products!: Product[];
  @Input({ required: false }) isBoughtList = false;
  @Output() deleteProduct = new EventEmitter<number>();

  handleDeleteProduct(productId: number) {
    this.deleteProduct.emit(productId);
  }
}

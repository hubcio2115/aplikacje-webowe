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
  @Input({ required: true }) public products!: Product[];
  @Input({ required: false }) public isBoughtList: boolean = false;
  @Output() public deleteProduct: EventEmitter<number> =
    new EventEmitter<number>();

  protected handleDeleteProduct(productId: number): void {
    this.deleteProduct.emit(productId);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../shared/data';
import clsx from 'clsx';
import { ModalComponent } from '../../shared/modal/modal.component';
import { LucideAngularModule, Minus, Plus, Trash2 } from 'lucide-angular';
import { ProductPipe } from '../../shared/product.pipe';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ModalComponent,
    LucideAngularModule,
    ProductPipe,
  ],
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  @Input({ required: true }) product!: Product;
  @Input({ required: false }) isBoughtList = false;
  @Output() deleteProduct = new EventEmitter<number>();

  readonly PlusIcon = Plus;
  readonly MinusIcon = Minus;
  readonly TrashIcon = Trash2;

  showModal = false;

  modalBody(name: string, quantity: number) {
    return `Are you sure you want to delete: ${name} (quantity: ${quantity})?`;
  }

  changeQuantity(amount: number) {
    this.product.quantity += amount;
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  handleProductDelete(productId: number) {
    this.deleteProduct.emit(productId);
  }

  readonly clsx = clsx;
}

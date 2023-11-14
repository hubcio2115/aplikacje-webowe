import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../shared/data';
import clsx from 'clsx';
import { ModalComponent } from '../../shared/modal/modal.component';
import { LucideAngularModule, Minus, Plus, Trash2 } from 'lucide-angular';
import { ProductPipe } from '../../shared/product.pipe';
import { LucideIconData } from 'lucide-angular/icons/types';

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
  @Input({ required: true }) public product!: Product;
  @Input({ required: false }) public isBoughtList: boolean = false;
  @Output() public deleteProduct: EventEmitter<number> =
    new EventEmitter<number>();

  protected readonly PlusIcon: LucideIconData = Plus;
  protected readonly MinusIcon: LucideIconData = Minus;
  protected readonly TrashIcon: LucideIconData = Trash2;

  protected showModal: boolean = false;

  protected modalBody(name: string, quantity: number): string {
    return `Are you sure you want to delete: ${name} (quantity: ${quantity})?`;
  }

  protected changeQuantity(amount: number): void {
    this.product.quantity += amount;
  }

  protected toggleModal(): void {
    this.showModal = !this.showModal;
  }

  protected handleProductDelete(productId: number): void {
    this.deleteProduct.emit(productId);
  }

  protected readonly clsx: typeof clsx = clsx;
}

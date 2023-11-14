import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import loadProducts, { type Product } from './shared/data';
import { ProductFormComponent } from './products/product-form/product-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonsComponent,
    ProductListComponent,
    ProductFormComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  protected products: Product[] = [];
  protected boughtProducts: Product[] = [];

  public ngOnInit(): void {
    loadProducts().then((products: Product[]) => {
      this.products = products;
    });
  }

  protected addProduct(newProduct: string): void {
    if (!newProduct.length) return;

    const productAlreadyInList: Product | undefined = this.products.find(
      (product: Product) => product.name === newProduct,
    );

    if (productAlreadyInList)
      alert('You cannot add product that already exists.');

    if (confirm('Are you sure about that?'))
      this.products.push({
        id: this.products.length + 1,
        name: newProduct,
        checked: false,
        quantity: 1,
      });
  }

  protected deleteProduct(productId: number): void {
    const indexToRemove: number = this.products.findIndex(
      (product: Product) => product.id === productId,
    );

    this.products.splice(indexToRemove, 1);
  }

  protected buyCheckedProducts(): void {
    const newProducts: Product[] = [];

    for (const product of this.products) {
      if (product.checked) this.boughtProducts.push(product);
      else newProducts.push(product);
    }

    this.products = newProducts;
  }
}

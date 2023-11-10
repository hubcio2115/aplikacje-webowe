import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductsModule } from './products/products.module';
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
    ProductsModule,
    ButtonsComponent,
    ProductListComponent,
    ProductFormComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  boughtProducts: Product[] = [];

  ngOnInit() {
    loadProducts().then((products) => {
      this.products = products;
    });
  }

  addProduct(newProduct: string) {
    if (!newProduct.length) return;

    const productAlreadyInList = this.products.find(
      (product) => product.name === newProduct,
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

  deleteProduct(productId: number) {
    const indexToRemove = this.products.findIndex(
      (product) => product.id === productId,
    );

    this.products.splice(indexToRemove, 1);
  }

  buyCheckedProducts() {
    const newProducts: Product[] = [];

    for (const product of this.products) {
      if (product.checked) this.boughtProducts.push(product);
      else newProducts.push(product);
    }

    this.products = newProducts;
  }
}

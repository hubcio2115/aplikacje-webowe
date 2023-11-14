import { Injectable, inject } from '@angular/core';
import loadProducts, {
  productSchema,
  type Product,
  BoughtProduct,
  boughtProductSchema,
} from '~/app/shared/data';
import { z } from 'zod';
import { LastAddedProductService } from './last-added-product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  #products: Product[] = [];
  #boughtProducts: BoughtProduct[] = [];

  readonly #lastAddedProductService = inject(LastAddedProductService);

  private saveToLocalStorage(what: 'boughtProducts' | 'products'): void {
    switch (what) {
      case 'products':
        localStorage.setItem(what, JSON.stringify(this.#products));
        break;
      case 'boughtProducts':
        localStorage.setItem(what, JSON.stringify(this.#boughtProducts));
        break;
    }
  }

  private sortProducts() {
    this.#products.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }

  private sortBoughtProducts() {
    this.#boughtProducts.sort(
      (a, b) => a.bought!.getTime() - b.bought!.getTime(),
    );
  }

  public constructor() {
    const products: string | null = localStorage.getItem('products');
    if (products) {
      // eslint-disable-next-line
      const parsedProducts = z
        .array(productSchema)
        .safeParse(JSON.parse(products));

      if (parsedProducts.success) this.#products = parsedProducts.data;
      // eslint-disable-next-line
      else console.log(parsedProducts.error);
    } else {
      loadProducts().then((products: Product[]) => {
        this.#products = products;
        this.saveToLocalStorage('products');
      });
    }

    const boughtProducts: string | null =
      localStorage.getItem('boughtProducts');
    if (boughtProducts) {
      // eslint-disable-next-line
      const parsedProducts = z
        .array(boughtProductSchema)
        .safeParse(JSON.parse(boughtProducts));

      if (parsedProducts.success) this.#boughtProducts = parsedProducts.data;
      // eslint-disable-next-line
      else console.log(parsedProducts.error);
    }
  }

  public get products(): Product[] {
    return this.#products;
  }

  public get boughtProducts(): Product[] {
    return this.#boughtProducts;
  }

  public addProduct(newProduct: string): void {
    if (!newProduct.length) return;

    const productAlreadyInList: Product | undefined = this.products.find(
      (product: Product) => product.name === newProduct,
    );

    if (productAlreadyInList)
      alert('You cannot add product that already exists.');

    if (confirm('Are you sure about that?')) {
      const product = {
        id: this.products.length + 1,
        name: newProduct,
        checked: false,
        quantity: 1,
      };

      this.products.push(product);
      this.#lastAddedProductService.lastAddedProduct$.next(product);

      this.sortProducts();
      this.saveToLocalStorage('products');
    }
  }

  public deleteProduct(productId: number): void {
    const indexToRemove: number = this.products.findIndex(
      (product: Product) => product.id === productId,
    );

    this.products.splice(indexToRemove, 1);
    this.saveToLocalStorage('products');
  }

  public buyCheckedProducts(): void {
    const newProducts: Product[] = [];

    for (const product of this.products) {
      if (product.checked)
        this.#boughtProducts.push({ bought: new Date(), ...product });
      else newProducts.push(product);
    }

    this.#products = newProducts;

    this.sortBoughtProducts();
    this.saveToLocalStorage('boughtProducts');
  }
}

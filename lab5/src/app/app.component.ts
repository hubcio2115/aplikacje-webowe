import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonsComponent } from '~/app/components/buttons/buttons.component';
import { ProductListComponent } from '~/app/components/products/product-list/product-list.component';
import { ProductFormComponent } from '~/app/components/products/product-form/product-form.component';
import { ProductService } from '~/app/services/product.service';
import { LastAddedProductService } from './services/last-added-product.service';
import { type Product } from './shared/data';
import { Subscription } from 'rxjs';

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
export class AppComponent implements OnInit, OnDestroy {
  protected readonly productService: ProductService = inject(ProductService);
  protected readonly lastAddedProductService: LastAddedProductService = inject(
    LastAddedProductService,
  );
  #lastAddedProductSubscription!: Subscription;

  protected lastAddedProduct!: Product;

  ngOnInit(): void {
    this.#lastAddedProductSubscription =
      this.lastAddedProductService.lastAddedProduct$.subscribe((newValue) => {
        this.lastAddedProduct = newValue;
      });
  }

  ngOnDestroy(): void {
    this.#lastAddedProductSubscription.unsubscribe();
  }
}

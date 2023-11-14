import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../shared/data';

@Injectable({
  providedIn: 'root',
})
export class LastAddedProductService {
  readonly lastAddedProduct$ = new Subject<Product>();
}

import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumberEmitterService {
  #number = interval(1000);

  getNumberObservable() {
    return this.#number;
  }
}

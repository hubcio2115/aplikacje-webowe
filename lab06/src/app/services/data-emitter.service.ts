import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataEmitterService {
  data$ = new Subject<number>();

  public emitData(data: number) {
    this.data$.next(data);
  }

  public complete() {
    this.data$.complete();
  }
}

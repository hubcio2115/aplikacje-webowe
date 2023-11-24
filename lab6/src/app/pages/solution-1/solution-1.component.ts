import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberEmitterService } from '../../services/number-emitter.service';
import { Subscription, filter, map, take } from 'rxjs';

@Component({
  selector: 'app-solution-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solution-1.component.html',
})
export class Solution1Component implements OnInit, OnDestroy {
  numberEmitterService = inject(NumberEmitterService);
  numberSubscription!: Subscription;
  evenNumbers: number[] = [];

  ngOnInit(): void {
    this.numberSubscription = this.numberEmitterService
      .getNumberObservable()
      .pipe(
        take(5),
        filter((value) => value % 2 === 0),
        map((value) => Math.pow(value, 2)),
      )
      .subscribe((value) => {
        this.evenNumbers.push(value);
      });
  }

  ngOnDestroy(): void {
    this.numberSubscription.unsubscribe();
  }
}

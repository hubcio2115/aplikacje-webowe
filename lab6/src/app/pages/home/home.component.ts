import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEmitterService } from '../../services/data-emitter.service';
import { Subscription, map, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  subscriberA!: Subscription;
  subscriberB!: Subscription;
  subscriberC!: Subscription;

  timeouts: ReturnType<typeof setTimeout>[] = [];

  dataA: number | undefined;
  dataB: number | undefined;
  dataC: number | undefined;

  constructor(private dataService: DataEmitterService) {}

  ngOnInit(): void {
    this.subscriberA = this.dataService.data$
      .pipe(
        tap((value) => {
          console.log(value);
        }),
        map((value) => {
          this.dataA = value;
        }),
      )
      .subscribe();

    this.subscriberB = this.dataService.data$
      .pipe(
        map((value) => {
          this.dataB = value * 2;
        }),
      )
      .subscribe();

    this.subscriberC = this.dataService.data$
      .pipe(
        tap({
          complete() {
            console.log('Observable zakończony.');
          },
        }),
        map((value) => {
          this.dataC = value;
        }),
      )
      .subscribe();

    this.timeouts = [
      setTimeout(() => {
        this.dataService.emitData(10);
      }, 1000),
      setTimeout(() => {
        this.dataService.emitData(20);
      }, 2000),
      setTimeout(() => {
        this.dataService.emitData(30);
      }, 3000),
      setTimeout(() => {
        this.dataService.complete();
      }, 4000),
    ];
  }

  ngOnDestroy(): void {
    this.subscriberA.unsubscribe();
    this.subscriberB.unsubscribe();
    this.subscriberC.unsubscribe();

    this.timeouts.forEach((timeout) => {
      clearTimeout(timeout);
    });
  }
}

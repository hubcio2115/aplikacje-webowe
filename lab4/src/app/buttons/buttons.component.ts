import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent {
  counter = 0;
  intervalId!: ReturnType<typeof setInterval>;

  start() {
    this.stop();

    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  reset() {
    this.counter = 0;
  }

  stop() {
    clearInterval(this.intervalId);
  }
}

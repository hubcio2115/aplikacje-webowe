import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '~/app/components/counter/counter.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent {
  protected counter: number = 0;
  private intervalId!: ReturnType<typeof setInterval>;

  protected start(): void {
    this.stop();

    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  protected reset(): void {
    this.counter = 0;
  }

  protected stop(): void {
    clearInterval(this.intervalId);
  }
}

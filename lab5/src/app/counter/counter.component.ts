import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  @Input({ required: true }) public counter!: number;
}

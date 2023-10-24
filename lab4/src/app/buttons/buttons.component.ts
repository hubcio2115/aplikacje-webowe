import { Component } from "@angular/core";

@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
})
export class ButtonsComponent {
  counter = 0;
  intervalId!: ReturnType<typeof setInterval>;

  start() {
    this.stop()

    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000)
  }

  reset() {
    this.counter = 0;
  }

  stop() {
    clearInterval(this.intervalId)
  }
}

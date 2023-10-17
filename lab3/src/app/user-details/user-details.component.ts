import { Component } from "@angular/core";

type User = {
 firstName: string;
  lastName: string;
  status: "active" | "inactive";
  age: number
}

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
})
export class UserDetailsComponent {
  user: User = {
    firstName: "Hubert",
    lastName: "Kowalski",
    status: "active",
    age: 22,
  }

  getName() {
    return `Nazywasz się ${this.user.firstName} ${this.user.lastName}`
  }
}

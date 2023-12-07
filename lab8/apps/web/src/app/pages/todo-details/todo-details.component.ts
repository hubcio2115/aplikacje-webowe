import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { TodosService, type Todo } from "../../services/todos.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-todo-details",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./todo-details.component.html",
})
export class TodoDetailsComponent implements OnInit {
  todo!: Todo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private todoService: TodosService,
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.todo = data["todo"];
    });
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todo.id).subscribe(() => {
      this.router.navigate(["/"]);
    });
  }

  goBack() {
    this.location.back();
  }
}

import { Component, OnDestroy, OnInit } from "@angular/core";
import { type Todo, TodosService } from "../../services/todos.service";
import { Subscription } from "rxjs";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-todo-list",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./todo-list.component.html",
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  todosSubscription!: Subscription;

  constructor(readonly todosService: TodosService) {}

  ngOnInit(): void {
    this.todosSubscription = this.todosService.getAll().subscribe((data) => {
      this.todos = data;
    });
  }

  ngOnDestroy(): void {
    this.todosSubscription.unsubscribe();
  }
}

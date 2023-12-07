import { Component, OnInit } from "@angular/core";
import { type Todo, TodosService } from "../../services/todos.service";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-todo-list",
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: "./todo-list.component.html",
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(readonly todosService: TodosService) {}

  getAllTodos() {
    this.todosService.getAll().subscribe((data) => {
      this.todos = data;
    });
  }

  deleteTodo(id: Todo["id"]) {
    this.todosService.deleteTodo(id).subscribe(() => {
      this.getAllTodos();
    });
  }

  ngOnInit(): void {
    this.getAllTodos();
  }
}

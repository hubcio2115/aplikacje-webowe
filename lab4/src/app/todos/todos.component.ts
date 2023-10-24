import { Component } from "@angular/core";
import clsx from "clsx"

interface Todo {
  id: number;
  body: string;
  checked: boolean;
}

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
})
export class TodosComponent {
  todos: Todo[] = []

  readonly clsx = clsx;

  addTodo(newTodo: string) {
    if (!newTodo.length) return;

    const todoAlreadyInList = this.todos.find((todo) => todo.body === newTodo)
    if (todoAlreadyInList) alert("You cannot add todo that already exists.");

    if (confirm("Are you sure about that?"))
      this.todos.push({id: this.todos.length + 1, body: newTodo, checked: false});
  }

  toggleTodo(todoId: number) {
    const todo = this.todos.find((todo) => todo.id === todoId)

    if (todo) todo.checked = !todo.checked
  }

  deleteTodo(todoId: number) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId)
  }

  deleteCheckedTodos() {
    const todos = this.todos.filter((todo) => todo.checked)

    for (const todo of todos) {
      this.deleteTodo(todo.id);
    }
  }
}

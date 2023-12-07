import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export type Todo = {
  id: number;
  name: string;
  isComplete: boolean;
};

@Injectable({
  providedIn: "root",
})
export class TodosService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Todo[]>("http://localhost:3000/todos");
  }

  getById(id: Todo["id"]) {
    return this.http.get<Todo>(`http://localhost:3000/todos/${id}`);
  }

  addTodo(newTodo: Omit<Todo, "id">) {
    return this.http.post("http://localhost:3000/todos", newTodo);
  }

  editTodo(id: Todo["id"], data: Partial<Omit<Todo, "id">>) {
    return this.http.patch(`http://localhost:3000/todos/${id}`, data);
  }

  deleteTodo(id: Todo["id"]) {
    return this.http.delete(`http://localhost:3000/todos/${id}`);
  }
}

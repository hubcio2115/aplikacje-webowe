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
    return this.http.get<Todo[]>("/api/todos/");
  }

  getById(id: Todo["id"]) {
    return this.http.get<Todo>(`/api/todos/${id}`);
  }

  addTodo(newTodo: Omit<Todo, "id">) {
    return this.http.post("/api/todos", newTodo);
  }

  editTodo(id: Todo["id"], data: Partial<Omit<Todo, "id">>) {
    return this.http.patch(`/api/todos/${id}`, data);
  }

  deleteTodo(id: Todo["id"]) {
    return this.http.delete(`/api/todos/${id}`);
  }
}

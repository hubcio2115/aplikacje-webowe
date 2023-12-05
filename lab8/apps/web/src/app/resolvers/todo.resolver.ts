import { type ResolveFn } from "@angular/router";
import { type Todo, TodosService } from "../services/todos.service";
import { inject } from "@angular/core";

export const todoResolver: ResolveFn<Todo> = (route) => {
  return inject(TodosService).getById(route.params["id"]);
};

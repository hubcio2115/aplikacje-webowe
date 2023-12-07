import { Routes } from "@angular/router";
import { TodoListComponent } from "./pages/todo-list/todo-list.component";
import { TodoFormComponent } from "./pages/todo-form/todo-form.component";
import { TodoDetailsComponent } from "./pages/todo-details/todo-details.component";
import { todoResolver } from "./resolvers/todo.resolver";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "list",
  },
  {
    path: "list",
    component: TodoListComponent,
  },
  {
    path: "form",
    component: TodoFormComponent,
  },
  {
    path: "form/:id",
    resolve: {
      todo: todoResolver,
    },
    component: TodoFormComponent,
  },
  {
    path: "details/:id",
    component: TodoDetailsComponent,
    resolve: {
      todo: todoResolver,
    },
  },
];

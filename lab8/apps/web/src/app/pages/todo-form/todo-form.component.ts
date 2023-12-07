import { Component, OnInit } from "@angular/core";
import { Todo, TodosService } from "../../services/todos.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Location } from "@angular/common";

@Component({
  selector: "app-todo-form",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./todo-form.component.html",
})
export class TodoFormComponent implements OnInit {
  todo?: Todo;
  todoForm = new FormGroup({
    name: new FormControl("", { nonNullable: true }),
    isComplete: new FormControl(false, { nonNullable: true }),
  });
  isEditForm = true;

  constructor(
    private todosService: TodosService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.data.subscribe((data) => {
      this.todo = data["todo"];

      if (!this.todo) this.isEditForm = false;
    });
  }

  onSubmit() {
    if (this.isEditForm) {
      const todo = this.todoForm.value as Partial<Omit<Todo, "id">>;

      this.todosService.editTodo(this.todo!.id, todo).subscribe(() => {
        this.router.navigate(["/list"]);
      });
    } else {
      const todo = this.todoForm.value as Todo;

      this.todosService.addTodo(todo).subscribe(() => {
        this.router.navigate(["/list"]);
      });
    }
  }

  ngOnInit() {
    if (this.todo) {
      this.todoForm.controls.name.setValue(this.todo.name);
      this.todoForm.controls.isComplete.setValue(this.todo.isComplete);
    }
  }

  goBack() {
    this.location.back();
  }
}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { CounterComponent } from './counter/counter.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [AppComponent, ButtonsComponent, CounterComponent, TodosComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ExerciseComponent } from "./exercise/exercise.component";
import { LayoutModule } from "./layout/layout.module";
import { UserDetailsComponent } from "./user-details/user-details.component";

@NgModule({
  declarations: [AppComponent, ExerciseComponent, UserDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

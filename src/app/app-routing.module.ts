import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'todo/:id', component: TodoEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

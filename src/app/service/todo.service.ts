import { Injectable } from '@angular/core';
import { ToDoItem } from './../entities/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todoItems: ToDoItem[] = new Array<ToDoItem>();

  constructor() {
    for (let i = 0; i < 5; i++) {
      let todoItem: ToDoItem = {} as ToDoItem;
      let id: number = Math.floor((Math.random() * 100) + 1);
      todoItem.ID = id;
      todoItem.Description = 'Description ' + id;
      todoItem.DueByDate = new Date(new Date().setHours(new Date().getHours() + (i + 1)));
      todoItem.IsCompleted = true;
      this.todoItems.push(todoItem);
    }
  }
}

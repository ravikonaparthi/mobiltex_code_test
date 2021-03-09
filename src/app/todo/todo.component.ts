import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../entities/todo';
import { TodoService } from './../service/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todoItems: ToDoItem[];
  displayedColumns: string[] = ['ID', 'Description', 'DueByDate', 'IsCompleted', 'actions'];

  constructor(public todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.todoItems = this.todoService.todoItems;
  }

  onEdit(selectedItem: ToDoItem) {
    this.router.navigate(['/todo', selectedItem.ID]);
  }

}

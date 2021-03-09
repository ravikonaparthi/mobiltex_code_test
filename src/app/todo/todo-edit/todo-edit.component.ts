import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoItem } from './../../entities/todo';
import { TodoService } from './../../service/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  public selectedTodoItem: ToDoItem;
  public minDate: Date;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;

  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedTodoItem = this.todoService.todoItems.find(x => x.ID === id);
    this.minDate = this.selectedTodoItem.DueByDate;
  }

  saveData() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    let index = this.todoService.todoItems.findIndex(x => x.ID === id);
    this.todoService.todoItems[index] = this.selectedTodoItem;
    this.router.navigate(['todo']);
  }

}

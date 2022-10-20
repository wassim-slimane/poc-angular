import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoTitle : string = "";

  todoList : any = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoList = this.todoService.todoList;
  }
  
  addTask() {
    // Faire une interface pour la todoList
    if (this.todoTitle.length > 0 && this.todoTitle !== this.todoList.at(-1)?.title) {
      this.todoService.addOne(this.todoTitle, false);
    }
  }

}

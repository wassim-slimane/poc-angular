import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  @Input() todoList : {title: string, status: boolean}[] = [] 

  constructor() { }

  ngOnInit(): void {
  }

  setStatus(taskTitle: string) {
    this.todoList[this.todoList.indexOf({title: taskTitle, status: false})].status = true;

    console.log(this.todoList.indexOf({title: taskTitle, status: false}));
    
  }

  deleteTask(taskTitle: string) {
    this.todoList = this.todoList.filter( task => task.title !== taskTitle);
  }

}

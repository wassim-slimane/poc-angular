import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoTitle : string = ""

  todoList : {title: string, status: boolean}[] = [
    {
      title: "tache 1",
      status: false,
    },
    {
      title: "tache 2",
      status: false,
    },
    {
      title: "tache 3",
      status: false,
    },
    {
      title: "tache 4",
      status: false,
    },
    {
      title: "tache 5",
      status: false,
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }
  
  addTask() {
    // Faire une interface pour la todoList
    if (this.todoTitle.length > 0 && this.todoTitle !== this.todoList.at(-1)?.title) {
      this.todoList.push({title: this.todoTitle, status: false});
    }
  }

}

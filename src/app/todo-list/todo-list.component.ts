import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoTitle : string = ""
  todoStatus : boolean = false

  todoTab : {title: string, status: boolean}[] = [
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
  ]

  constructor() { }

  ngOnInit(): void {

  }

}

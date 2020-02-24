import { Component, OnInit } from "@angular/core";
import { TodoDataService } from "../service/data/todo-data.service";

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: "app-list-to-dos",
  templateUrl: "./list-to-dos.component.html",
  styleUrls: ["./list-to-dos.component.css"]
})
export class ListToDosComponent implements OnInit {
  todos: Todo[];

  // todos = [
  //   new Todo(1, "Poppin!", false, new Date()),
  //   new Todo(2, "Coding!", false, new Date()),
  //   new Todo(3, "Lab!", false, new Date())
  // ];

  constructor(private todoService: TodoDataService) {}

  ngOnInit() {
    this.todoService.retrieveAllTodos("cha").subscribe(response => {
      console.log(response);
      this.todos = response;
    });
  }
}

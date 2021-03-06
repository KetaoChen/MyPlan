import { Component, OnInit } from "@angular/core";
import { TodoDataService } from "../service/data/todo-data.service";
import { Router } from "@angular/router";

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
  deleteMessage: string;

  // todos = [
  //   new Todo(1, "Poppin!", false, new Date()),
  //   new Todo(2, "Coding!", false, new Date()),
  //   new Todo(3, "Lab!", false, new Date())
  // ];

  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos("charlesna").subscribe(response => {
      console.log(response);
      this.todos = response;
    });
  }

  deleteTodo(id) {
    console.log(`we are deleting Todo ${id}`);
    this.todoService.deleteTodo("charlesna", id).subscribe(response => {
      console.log(response);
      this.deleteMessage = `Delete Todo ${id} successfully!`;
      this.refreshTodos();
    });
  }

  updateTodo(id) {
    console.log(`we are update Todo ${id}`);
    this.router.navigate(["todos", id]);
  }

  addTodo() {
    this.router.navigate(["todos", -1]);
  }
}

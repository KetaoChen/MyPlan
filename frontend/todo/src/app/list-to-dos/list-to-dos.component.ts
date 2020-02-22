import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-to-dos",
  templateUrl: "./list-to-dos.component.html",
  styleUrls: ["./list-to-dos.component.css"]
})
export class ListToDosComponent implements OnInit {
  todos = [
    { id: 1, description: "Poppin!" },
    { id: 2, description: "Coding!" },
    { id: 3, description: "Lab!" }
  ];

  constructor() {}

  ngOnInit() {}
}

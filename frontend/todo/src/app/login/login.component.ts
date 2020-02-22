import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = "Charlesna";
  password = "31415926";
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  constructor() {}

  ngOnInit() {}

  handleLogin() {
    if (this.username === "Charlesna" && this.password === "31415926") {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}

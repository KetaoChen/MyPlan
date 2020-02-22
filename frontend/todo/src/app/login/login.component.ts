import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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

  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  constructor(private router: Router) {}

  ngOnInit() {}

  handleLogin() {
    if (this.username === "Charlesna" && this.password === "31415926") {
      this.invalidLogin = false;
      //Redirect to welcome page.
      this.router.navigate(["welcome"]);
    } else {
      this.invalidLogin = true;
    }
  }
}

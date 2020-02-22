import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HardcodedAuthService } from "../service/hardcoded-auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = "Charlesna";
  password;
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  constructor(
    private router: Router,
    private hardcodedAuthService: HardcodedAuthService
  ) {}

  ngOnInit() {}

  handleLogin() {
    if (this.hardcodedAuthService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      //Redirect to welcome page.
      this.router.navigate(["welcome", this.username]);
    } else {
      this.invalidLogin = true;
    }
  }
}

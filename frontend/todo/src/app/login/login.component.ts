import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HardcodedAuthService } from "../service/hardcoded-auth.service";
import { BasicAuthenticationService } from "../service/basic-authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = "user";
  password;
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  constructor(
    private router: Router,
    private hardcodedAuthService: HardcodedAuthService,
    private basicAuthenticationService: BasicAuthenticationService
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

  handleBasicAuthLogin() {
    this.basicAuthenticationService
      .executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(["welcome", this.username]);
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }
}

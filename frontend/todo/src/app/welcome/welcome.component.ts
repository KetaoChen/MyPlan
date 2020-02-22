import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  welcomeMessage = "Welcome to Charlesna TODO Website!";

  //ActivateRoute
  constructor(private route: ActivatedRoute) {}
  name = this.route.snapshot.params["name"];

  ngOnInit() {
    console.log("welcome works");
    console.log(this.name);
  }
}

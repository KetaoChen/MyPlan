import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WelcomeDataService } from "../service/data/welcome-data.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  welcomeMessage = "Welcome to Charlesna TODO Website!";

  //ActivateRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  name = this.route.snapshot.params["name"];

  ngOnInit() {
    console.log("welcome works");
    console.log(this.name);
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe();
  }
}

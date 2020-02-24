import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WelcomeDataService } from "../service/data/welcome-data.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  //ActivateRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  name = this.route.snapshot.params["name"];
  welcomeMessageFromService: string;
  welcomeMessage = "Welcome to Charlesna TODO Website!";

  ngOnInit() {
    //console.log("welcome works");
    //console.log(this.name);
  }

  getWelcomeMessage() {
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    //console.log("Last line of get welcome message");
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
    //console.log(response.message);
  }

  handleErrorResponse(error) {
    console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }
}

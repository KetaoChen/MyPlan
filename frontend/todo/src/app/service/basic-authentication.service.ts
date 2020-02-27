import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}

  authenticate(username, password) {
    //console.log("before " + this.isUserLoggedIn());
    if (username === "Charlesna" && password === "31415926") {
      sessionStorage.setItem("authenticatedUser", username);
      //console.log("after " + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  executeAuthenticationService(username, password) {
    let basicAuthHeaderString =
      "Basic " + window.btoa(username + ":" + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`,
      { headers: headers }
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }
}

export class AuthenticationBean {
  constructor(public message: String) {}
}
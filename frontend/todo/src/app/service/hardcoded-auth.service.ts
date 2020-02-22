import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HardcodedAuthService {
  constructor() {}

  authenticate(username, password) {
    if (username === "Charlesna" && password === "31415926") {
      return true;
    }
    return false;
  }
}

package com.charlesna.rest.webservices.todorestfulwebservices.basic.auth;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController {

    // hello-world-bean
    @GetMapping(path = "/basicauth")
    public AuthenticationdBean helloWorldBean() {
        // throw new RuntimeException("Some error has Happened!");
        return new AuthenticationdBean("You are authentic!");
    }


}

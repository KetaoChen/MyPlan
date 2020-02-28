package com.charlesna.rest.webservices.todorestfulwebservices.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

    //token: eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU4MzQ2Njg1OSwiaWF0IjoxNTgyODYyMDU5fQ.I-0cj01mvfdfBOGyO8mROEupfb52rCf0cxKQnmNGsb6tZbkvgSCcQ1iuSVsOqJ6tTT1lBCy4NZeIE8SMAtfsWA

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

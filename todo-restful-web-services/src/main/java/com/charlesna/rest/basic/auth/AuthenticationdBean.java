package com.charlesna.rest.basic.auth;

public class AuthenticationdBean {

    private String message;

    public AuthenticationdBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "HelloWorldBean{" + "message='" + message + '\'' + '}';
    }
}

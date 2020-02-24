package com.charlesna.rest.webservices.todorestfulwebservices;


import com.charlesna.rest.webservices.todorestfulwebservices.todo.Todo;
import com.charlesna.rest.webservices.todorestfulwebservices.todo.TodoHardcodedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TodoResource {

    @Autowired
    private TodoHardcodedService todoservice;

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoservice.findAll();
    }
}

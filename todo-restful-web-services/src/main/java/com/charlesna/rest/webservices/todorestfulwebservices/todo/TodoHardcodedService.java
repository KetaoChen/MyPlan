package com.charlesna.rest.webservices.todorestfulwebservices.todo;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList();
    private static int idCounter = 0;


    static {
        todos.add(new Todo(idCounter++, "cha", "Poppin", new Date(), false));
        todos.add(new Todo(idCounter++, "cha", "Coding", new Date(), false));
        todos.add(new Todo(idCounter++, "cha", "Lab", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }
}
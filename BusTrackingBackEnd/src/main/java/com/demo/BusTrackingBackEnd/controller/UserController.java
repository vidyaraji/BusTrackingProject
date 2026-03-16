package com.demo.BusTrackingBackEnd.controller;

import com.demo.BusTrackingBackEnd.entity.User;
import com.demo.BusTrackingBackEnd.service.UserService;

// import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // REGISTER
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        // console.log("");
        System.out.println("Id Before Save:" +user.getId());
        user.setId(null);
        return userService.register(user);
    }

    // LOGIN
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        Optional<User> loggedUser =
                userService.login(user.getEmail(), user.getPassword());
                System.out.println("loggedUser "+ loggedUser);
        if (loggedUser.isPresent()) {
            return "valid";
        } else {
            return "Invalid";
        }
    }
}
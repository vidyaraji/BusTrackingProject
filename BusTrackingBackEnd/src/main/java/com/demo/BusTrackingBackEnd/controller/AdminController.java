package com.demo.BusTrackingBackEnd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.demo.BusTrackingBackEnd.entity.Admin;
import com.demo.BusTrackingBackEnd.model.AdminLogin;
import com.demo.BusTrackingBackEnd.service.AdminService;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AdminLogin request) {

        Admin admin = adminService
                .login(request.getAdminName(), request.getPassword());

        if (admin != null) {
            return ResponseEntity.ok(admin);
        } else {
            return ResponseEntity.status(401)
                    .body("Invalid Admin Credentials");
        }
    }
}
package com.demo.BusTrackingBackEnd.controller;

import com.demo.BusTrackingBackEnd.entity.DriverDetails;
import com.demo.BusTrackingBackEnd.model.DriverLogin;
import com.demo.BusTrackingBackEnd.repository.DriverRepository;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
// import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin
public class AuthController {

    private final DriverRepository driverRepository;

    public AuthController(DriverRepository driverRepository) {
        this.driverRepository = driverRepository;
    }

    @PostMapping("/driver/login")
    public ResponseEntity<?> login(@RequestBody DriverLogin req) {

        Optional<DriverDetails> driverOpt = driverRepository.findByPhoneNumber(req.getPhoneNumber());

        if (driverOpt.isPresent()) {

            DriverDetails driver = driverOpt.get();
            System.out.println("Entered Password: "+ req.getPassword());
            System.out.println("Entered Phone Number: "+ req.getPhoneNumber());

            if (driver.getPassword().equals(req.getPassword())) {

                return ResponseEntity.ok(driver); // return DB data
            }
        }

        return ResponseEntity.status(401).body("Invalid credentials");
    }
}

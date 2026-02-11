package com.demo.BusTrackingBackEnd.controller;
import com.demo.BusTrackingBackEnd.model.DriverLogin;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.Map;

@RestController
@CrossOrigin
public class AuthController {

    @PostMapping("/driver/login")
    public ResponseEntity<?> login(@RequestBody DriverLogin req) {

        if ("Sivanandi".equals(req.getDriverName()) &&
            "61120".equals(req.getDriverpassword())) {

            return ResponseEntity.ok(
                Map.of(
                    "DriverName","Sivanandi",
                    "Driverpassword","61120",
                    "MobileNo" , "9685421345",
                    "Experience", "2 Years",
                    "Age","35",
                    "NativePlace", "Tenkasi",
                    "image","http://localhost:8080/images/driver.png"
                )
            );
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}

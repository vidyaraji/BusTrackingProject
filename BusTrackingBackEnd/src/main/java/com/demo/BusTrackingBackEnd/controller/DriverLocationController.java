package com.demo.BusTrackingBackEnd.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.demo.BusTrackingBackEnd.service.DriverLocationService;
import com.demo.BusTrackingBackEnd.entity.DriverLocation;

@RestController
@RequestMapping("/api/location")
@CrossOrigin
public class DriverLocationController {

    private final DriverLocationService service;

    public DriverLocationController(DriverLocationService service) {
        this.service = service;
    }

    @PostMapping("/share")
    public DriverLocation shareLocation(@RequestBody DriverLocation location) {
        System.out.println("BusPlate from request: " + location.getBusPlate());
        return service.saveLocation(location);
    }

    @GetMapping("/{busNo}")
    public ResponseEntity<?> getLocation(@PathVariable int busNo) {
        DriverLocation loc = service.getLocation(busNo);

        if (loc == null || !loc.getSharing()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(loc);
    }

    @PostMapping("/stop/{busNo}")
    public String stop(@PathVariable int busNo) {
        service.stopSharing(busNo);
        return "Stopped";
    }
}
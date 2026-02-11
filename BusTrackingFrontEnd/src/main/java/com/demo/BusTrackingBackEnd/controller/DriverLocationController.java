package com.demo.BusTrackingBackEnd.controller;

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
        return service.saveLocation(location);
    }

    @GetMapping("/{busNo}")
    public DriverLocation getLocation(@PathVariable String busNo) {
        return service.getLocation(busNo);
    }

    @PostMapping("/stop/{busNo}")
    public String stop(@PathVariable String busNo) {
        service.stopSharing(busNo);
        return "Stopped";
    }
}
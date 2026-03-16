package com.demo.BusTrackingBackEnd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.demo.BusTrackingBackEnd.entity.DriverDetails;
import com.demo.BusTrackingBackEnd.repository.DriverRepository;
import com.demo.BusTrackingBackEnd.service.DriverService;
import java.util.Optional;
import java.util.List;

@RestController
@RequestMapping("/api/drivers")
@CrossOrigin(origins = "http://localhost:5173")
public class DriverController {

    @Autowired
    private DriverService driverService;
    @Autowired  
    private DriverRepository driverRepository;

    @PostMapping("/register")
    public DriverDetails registerDriver(@RequestBody DriverDetails driver) {
        return driverService.saveDriver(driver);
    }

    @GetMapping("/mobile/{phoneNumber}")
    public ResponseEntity<?> getDriverByPhone(@PathVariable String phoneNumber) {

        Optional<DriverDetails> driver = driverService.findByPhoneNumber(phoneNumber);

        if (driver.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(driver.get());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateDriver(@PathVariable Long id,
            @RequestBody DriverDetails updatedDriver) {

        Optional<DriverDetails> existingDriver = driverService.findById(id);

        if (existingDriver.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        DriverDetails driver = existingDriver.get();

        driver.setName(updatedDriver.getName());
        driver.setAge(updatedDriver.getAge());
        driver.setPhoneNumber(updatedDriver.getPhoneNumber());
        driver.setExperience(updatedDriver.getExperience());
        driver.setPlace(updatedDriver.getPlace());

        driverService.saveDriver(driver);

        return ResponseEntity.ok("Driver Updated Successfully");
    }

    // @DeleteMapping("/delete/mobile/{phoneNumber}")
    // public ResponseEntity<?> deleteByPhone(@PathVariable String phoneNumber) {

    // Optional<DriverDetails> driver =
    // driverService.findByPhoneNumber(phoneNumber);

    // if (driver.isEmpty()) {
    // return ResponseEntity.notFound().build();
    // }

    // driverService.delete(driver.get());

    // return ResponseEntity.ok("Driver deleted successfully");
    // }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteDriver(@PathVariable Long id) {

        if (!driverService.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        driverService.deleteById(id);

        return ResponseEntity.ok("Driver deleted successfully");

    }

    @GetMapping("/all")
    public List<DriverDetails> getAllDrivers() {
        return driverRepository.findAll();
    }
}
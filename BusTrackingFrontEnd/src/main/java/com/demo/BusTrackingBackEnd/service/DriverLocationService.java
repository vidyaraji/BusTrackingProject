package com.demo.BusTrackingBackEnd.service;

import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import com.demo.BusTrackingBackEnd.repository.DriverLocationRepository;
import com.demo.BusTrackingBackEnd.entity.DriverLocation;

@Service
public class DriverLocationService {

    private final DriverLocationRepository repo;

    public DriverLocationService(DriverLocationRepository repo) {
        this.repo = repo;
    }

    public DriverLocation saveLocation(DriverLocation location) {
        location.setUpdatedAt(LocalDateTime.now());
        location.setSharing(true);
        return repo.save(location);
    }

    public DriverLocation getLocation(String busNo) {
        return repo.findByBusNo(busNo);
    }

    public void stopSharing(String busNo) {
        DriverLocation loc = repo.findByBusNo(busNo);
        if (loc != null) {
            loc.setSharing(false);
            repo.save(loc);
        }
    }
}
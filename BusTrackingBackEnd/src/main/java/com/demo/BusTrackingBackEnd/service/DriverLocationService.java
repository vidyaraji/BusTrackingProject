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
        DriverLocation existing =
            repo.findByBusNo(location.getBusNo());

    if (existing != null) {
        // UPDATE existing row
        existing.setLatitude(location.getLatitude());
        existing.setLongitude(location.getLongitude());
        existing.setUpdatedAt(LocalDateTime.now());
        existing.setdriverName(location.getDriverName());
        existing.setBusPlate(location.getBusPlate());
        existing.setMobileNo(location.getMobileNo());
        existing.setSharing(true);

        return repo.save(existing);
    }

    // First time insert
    location.setUpdatedAt(LocalDateTime.now());
    return repo.save(location);
    }

    public DriverLocation getLocation(int busNo) {
        return repo.findByBusNo(busNo);
    }

    public void stopSharing(int busNo) {
        DriverLocation loc = repo.findByBusNo(busNo);
        if (loc != null) {
            loc.setSharing(false);
            repo.save(loc);
        }
    }
}
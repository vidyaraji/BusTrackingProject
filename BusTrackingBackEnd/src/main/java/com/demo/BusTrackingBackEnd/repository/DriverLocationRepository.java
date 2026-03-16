package com.demo.BusTrackingBackEnd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.demo.BusTrackingBackEnd.entity.DriverLocation;

public interface DriverLocationRepository extends JpaRepository<DriverLocation, Long> {
    DriverLocation findByBusNo(int busNo);
}
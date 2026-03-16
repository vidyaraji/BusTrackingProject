package com.demo.BusTrackingBackEnd.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.BusTrackingBackEnd.entity.DriverDetails;
import com.demo.BusTrackingBackEnd.repository.DriverRepository;
import java.util.Optional;
// import org.demo.springframework.data.jpa.repository.jpaRepository;
// import org.springframework.data.jpa.repository.JpaRepository;

@Service
public class DriverService  {

    @Autowired
    private DriverRepository driverRepository;

    public DriverDetails saveDriver(DriverDetails driver) {
        return driverRepository.save(driver);
    }

    public Optional<DriverDetails> findByPhoneNumber(String phoneNumber) {
        return driverRepository.findByPhoneNumber(phoneNumber);
    }

    public Optional<DriverDetails> findById(Long id) {
        return driverRepository.findById(id);
    }


    public boolean existsById(Long id) {
        return driverRepository.existsById(id);
    }
    
    // Add this method
    public void deleteById(Long id) {
        driverRepository.deleteById(id);
    }
}
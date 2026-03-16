package com.demo.BusTrackingBackEnd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.demo.BusTrackingBackEnd.entity.DriverDetails;
import java.util.Optional;
import org.springframework.stereotype.Repository;

@Repository
public interface DriverRepository extends JpaRepository<DriverDetails, Long> {

    Optional<DriverDetails> findByPhoneNumber(String phoneNumber);
    // Optional<DriverDetails> findByPhoneNumber(String phoneNumber);

}

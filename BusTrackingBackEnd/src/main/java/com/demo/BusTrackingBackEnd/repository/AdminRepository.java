package com.demo.BusTrackingBackEnd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.demo.BusTrackingBackEnd.entity.Admin;
import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long> {

    Optional<Admin> findByAdminName(String adminName);
}
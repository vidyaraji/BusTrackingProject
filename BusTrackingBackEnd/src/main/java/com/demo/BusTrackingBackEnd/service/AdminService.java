package com.demo.BusTrackingBackEnd.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.BusTrackingBackEnd.entity.Admin;
import com.demo.BusTrackingBackEnd.repository.AdminRepository;

import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public Admin login(String adminName, String password) {

    Optional<Admin> admin =
            adminRepository.findByAdminName(adminName);

    if (admin.isPresent() &&
        admin.get().getPassword().equals(password)) {

        return admin.get();
    }

    return null;
}
}
package com.demo.BusTrackingBackEnd.repository;

import com.demo.BusTrackingBackEnd.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
// import java.string.lang;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
}
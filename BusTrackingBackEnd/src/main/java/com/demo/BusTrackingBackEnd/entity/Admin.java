package com.demo.BusTrackingBackEnd.entity;

import jakarta.persistence.*;
// import java.time.LocalDate;

@Entity
@Table(name = "admin")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "admin_name", unique = true)
    private String adminName;

    private String password;

    // private LocalDate dob;

    // @Column(name = "mobile_number")
    // private String mobileNumber;

    // private String email;




    // Getters and Setters

    public String getAdminName(){
        return adminName;
    }

    public void setAdminName(String adminName){
        this.adminName=adminName;
    }

    public String getPassword(){
        return password;
    }
    public void setPassword(String password){
        this.password=password;
    }

    // public LocalDate getDob(){
    //     return dob;
    // }
    // public void setDob(LocalDate dob){
    //     this.dob=dob;
    // }
    // public String getMobileNumber(){
    //     return mobileNumber;
    // }
    // public void setMobileNumber(String mobileNumber){
    //     this.mobileNumber=mobileNumber;
    // }
    // public String getEmail(){
    //     return email;
    // }
    // public void setEmail(String email){
    //     this.email=email;
    // }

}
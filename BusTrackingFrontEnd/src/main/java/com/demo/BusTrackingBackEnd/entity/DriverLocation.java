package com.demo.BusTrackingBackEnd.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class DriverLocation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String driverName;
    private String mobileNo;
    private String busNo;
    private String busPlate;

    private double latitude;
    private double longitude;

    private boolean sharing;

    private LocalDateTime updatedAt;

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDriverName() {
        return driverName;
    }

    public void setdriverName(String driverName) {
        this.driverName = driverName;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getBusNo() {
        return busNo;
    }

    public void setBusNo(String busNo) {
        this.busNo = busNo;
    }

    public String getbusPlate(){
        return busPlate;
    }
    public void setbusPlate(String busPlate){
        this.busPlate=busPlate;
    }


    public double getLatitude(){
        return latitude;
    }
    public void setLatitude(double latitude){
        this.latitude=latitude;
    }

    public double getLongitude(){
        return longitude;
    }
    public void setLongitude(double longitude){
        this.longitude=longitude;
    }

    public boolean getSharing(){
        return sharing;
    }
    public void setSharing(boolean sharing){
        this.sharing=sharing;
    }

    public LocalDateTime getUpdatedAt(){
        return updatedAt;
    } 
    public void setUpdatedAt(LocalDateTime updatedAt){
        this.updatedAt=updatedAt;
    }
}
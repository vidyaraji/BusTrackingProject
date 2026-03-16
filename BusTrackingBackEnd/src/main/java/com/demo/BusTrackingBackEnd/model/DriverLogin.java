package com.demo.BusTrackingBackEnd.model;

public class DriverLogin {
    private String phoneNumber;
    private String Driverpassword;

    
    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPassword() {
        return Driverpassword;
    }

    public void setPassword(String Driverpassword) {
        this.Driverpassword = Driverpassword;
    }
}
package com.demo.BusTrackingBackEnd.model;

public class AdminLogin {

    private String adminName;
    private String password;

    // getters and setters


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
}
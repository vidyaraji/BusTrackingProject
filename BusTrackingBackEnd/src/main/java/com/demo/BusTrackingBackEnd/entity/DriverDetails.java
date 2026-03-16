package com.demo.BusTrackingBackEnd.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "driver_details")
public class DriverDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private int age;
    private String phoneNumber;
    private int experience;
    private String place;
    private String photoPath;
    private String password;

    // Getters and Setters


    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id=id;
    }


    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name=name;
    }


    public int getAge(){
        return age;
    }

    public void setAge(int age){
        this.age=age;
    }


    public String getPhoneNumber(){
        return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber){
        this.phoneNumber=phoneNumber;
    }

    public int getExperience(){
        return experience;
    }
    public void setExperience(int experience){
        this.experience=experience;
    }

    public String getPlace(){
        return place;
    }
    public void setPlace(String place){
        this.place=place;
    }


    public String getPhotoPath(){
        return photoPath;
    }
    public void setPhotoPath(String photoPath){
        this.photoPath=photoPath;
    }


    public String getPassword(){
        return password;
    }
    public void setPassword(String password){
        this.password=password;
    }

}

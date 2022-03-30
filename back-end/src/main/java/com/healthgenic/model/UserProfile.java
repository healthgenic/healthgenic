package com.healthgenic.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class UserProfile{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int uid;
    private String username;
    private String name;
    private String phoneNumber;
    private String email;
    private String gender;
    @JsonFormat(pattern="dd/MM/yy")
    private Date dateOfBirth;
    private int age;
    private String bloodGroup;
    private String imageUrl;

    @Embedded
    private Address address;
    private String alternateNumber;
    private String language;

    public UserProfile() {
    }

    public UserProfile(int uid, String username, String name, String phoneNumber, String email,
                       String gender, Date dateOfBirth, int age, String bloodGroup, String imageUrl,
                       Address address, String alternateNumber, String language) {
        this.uid = uid;
        this.username = username;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.age = age;
        this.bloodGroup = bloodGroup;
        this.imageUrl = imageUrl;
        this.address = address;
        this.alternateNumber = alternateNumber;
        this.language = language;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public String getAlternateNumber() {
        return alternateNumber;
    }

    public void setAlternateNumber(String alternateNumber) {
        this.alternateNumber = alternateNumber;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }
}

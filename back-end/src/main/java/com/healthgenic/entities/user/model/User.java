package com.healthgenic.entities.user.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
	private String fullName;
	@Id
	private long mobileNumber;
	private String password;
	private String email;

	public User() {
		super();
	}

	public User(String fullName, long mobileNumber, String password, String email) {
		super();
		this.fullName = fullName;
		this.mobileNumber = mobileNumber;
		this.password = password;
		this.email = email;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}

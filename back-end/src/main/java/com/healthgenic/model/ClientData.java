package com.healthgenic.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ClientData {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;
	private String did;
	private String name;
	private String userName;
	private String mnumber;
	private String  mailid;
	private String bgroup;
	private String hIssue;

	private String age;
	private String gender;
	private String day;
	private String date;
	private String time;
	
	public String gethIssue() {
		return hIssue;
	}
	public void sethIssue(String hIssue) {
		this.hIssue = hIssue;
	}
	
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getDid() {
		return did;
	}
	public void setDid(String did) {
		this.did = did;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getMnumber() {
		return mnumber;
	}
	public void setMnumber(String mnumber) {
		this.mnumber = mnumber;
	}
	public String getMailid() {
		return mailid;
	}
	public void setMailid(String mailid) {
		this.mailid = mailid;
	}
	public String getBgroup() {
		return bgroup;
	}
	public void setBgroup(String bgroup) {
		this.bgroup = bgroup;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDay() {
		return day;
	}
	public void setDay(String day) {
		this.day = day;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	@Override
	public String toString() {
		return "ClientData [userId=" + userId + ", did=" + did + ", name=" + name + ", userName=" + userName
				+ ", mnumber=" + mnumber + ", mailid=" + mailid + ", bgroup=" + bgroup + ", age=" + age + ", gender="
				+ gender + ", day=" + day + ", date=" + date + ", time=" + time + "]";
	}
	
	}
	
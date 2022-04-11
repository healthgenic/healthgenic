package com.healthgenic.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.healthgenic.model.ClientData;
import com.healthgenic.repository.BookDrRepo;

@RestController
@CrossOrigin(origins="http://localhost:3000/")
public class BookDrContoller {
   
	@Autowired
	private BookDrRepo bookDr;
	@PostMapping("/getDetails")
	public ResponseEntity<String> getDetails(@RequestBody Map<String, Object> data) throws Exception
	{
		System.out.println("On server: working with post axios get ");
		System.out.println(data);
		ClientData clientData = new ClientData();
		clientData.setDid(data.get("did").toString());
		clientData.setName(data.get("name").toString());
		clientData.setUserName(data.get("userName").toString());
		clientData.setMnumber(data.get("mnumber").toString());
		clientData.setMailid(data.get("mailid").toString());
		clientData.setBgroup(data.get("bgroup").toString());
		clientData.setAge(data.get("age").toString());
		clientData.setGender(data.get("gender").toString());
		clientData.setDay(data.get("day").toString());
		clientData.setDate(data.get("date").toString());
		clientData.setTime(data.get("time").toString());
		this.bookDr.save(clientData);
		//return data.toString();
		return ResponseEntity.ok(" ");
		
 }
	@GetMapping("/bookingdata")
	public List<ClientData> getAll()
	{
		return bookDr.findAll();
	}
	
	
	
}

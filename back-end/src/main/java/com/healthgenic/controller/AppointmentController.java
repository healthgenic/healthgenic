package com.healthgenic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.healthgenic.model.Appointment;
import com.healthgenic.repository.AppointmentRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class AppointmentController {

	@Autowired
	private AppointmentRepository ap;
	
	
	@GetMapping("/hello")
	public String hello()
	{
		return "Hello";
	}
	
	@GetMapping("/order")
	public List<Appointment>find()
	{
		return ap.findAll();
	}
	
	@PostMapping("/BookAppointment")
	public Appointment CreateAppointment(@RequestBody Appointment a)
	{
		return ap.save(a);
	}

}

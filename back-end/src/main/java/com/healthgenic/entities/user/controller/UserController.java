package com.healthgenic.entities.user.controller;

import com.healthgenic.entities.response.Response;
import com.healthgenic.entities.user.model.User;
import com.healthgenic.entities.user.service.UserServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserController {
	@Autowired 
	private UserServiceInterface userServiceInterface;
	
	@PostMapping("/user")
	public Response createUser(@RequestBody User user) {
		String redirectionUrl = "";
		String message = "";
		if(userServiceInterface.isUserRegistrationDetailsValid(user)){
			if(userServiceInterface.isUserPresent(user.getMobileNumber())) {
				redirectionUrl = "http://localhost:3000/login-page";
				message = "User already exist";
				return new Response(redirectionUrl,message);
			}
			return userServiceInterface.createUser(user);
		}
		redirectionUrl = "http://localhost:8080/error-page";
		message = "bad data given";
		return new Response(redirectionUrl,message);

	}
	@GetMapping("/user/")
	public User getUser(@PathVariable int id) {
		return userServiceInterface.getUser(id);
	}
}

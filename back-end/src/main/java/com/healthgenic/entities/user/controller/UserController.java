package com.healthgenic.entities.user.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.healthgenic.entities.user.model.User;

@RestController
public class UserController {

	@PostMapping("/user")
	public User createUser(@RequestBody User user) {
		return user;

	}

}

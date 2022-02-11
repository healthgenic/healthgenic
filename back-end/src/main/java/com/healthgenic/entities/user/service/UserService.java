package com.healthgenic.entities.user.service;

import java.util.Optional;

import org.hibernate.HibernateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthgenic.entities.response.Response;
import com.healthgenic.entities.user.dao.UserDaoInterface;
import com.healthgenic.entities.user.model.User;
@Service
public class UserService implements UserServiceInterface {
	@Autowired 
	private UserDaoInterface userDaoInterface;
	
	@Override
	public User getUser(int id) {
		Optional<User> userX = null;
		User user = null;
		try {
			userX = userDaoInterface.findById(id);
		}catch(IllegalArgumentException iae) {
			return null;
		}
		if(userX.isPresent()) {
			user = userX.get();
		}
		return user;

	}

	@Override
	public Response createUser(User user) {
		User userFromDatabase = null;
		try {
			user.setDateCreated(new java.util.Date());
			userFromDatabase = userDaoInterface.save(user);
		}catch(HibernateException he) {
			System.out.println("Exception occured while saving user "
					+ "object into database");
			String errorPageUrl = "http://localhost:8080/error-page";
			return new Response(errorPageUrl);
		}
		String userHomePageUrl = "http://localhost:8080/user/"+userFromDatabase.getId();
		System.out.println(userHomePageUrl);
		return new Response(userHomePageUrl);
	}
	@Override
	public boolean validateUserDetails(User user) {

		return false;
	}

}

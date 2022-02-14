package com.healthgenic.entities.user.service;

import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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
	public User getUser(User id) {
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
		String redirectionUrl ="";
		try {
			user.setDateCreated(new java.util.Date());
			userFromDatabase = userDaoInterface.save(user);
		}catch(HibernateException he) {
			System.out.println("Exception occured while saving user "
					+ "object into database");
			redirectionUrl = "http://localhost:8080/error-page";
			return new Response(redirectionUrl, "error");
		}
		redirectionUrl = "http://localhost:8080/user/"+userFromDatabase.getId();
		return new Response(redirectionUrl, "success");
	}

	@Override
	public boolean isUserRegistrationDetailsValid(User user) {
		//check fullname
		Pattern pattern = Pattern.compile("^[a-z\\s]{2,}$");
		Matcher matcher = pattern.matcher(user.getFullName()); //ajay
		if(!matcher.find()){
			return false;
		}
		//check mobile number
		pattern = pattern.compile("^[\\d]{10}$");
		matcher = pattern.matcher(""+user.getMobileNumber());
		if(!matcher.find()){
			return false;
		}
		//check password
		return true;
	}

	@Override
	public boolean isUserPresent(long mobileNumber) {
		User user  = userDaoInterface.findByMobileNumber(mobileNumber);
		if(user != null ){
			return true;
		}
		return  false;
	}
}

package com.healthgenic.entities.user.service;

import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.hibernate.HibernateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.healthgenic.entities.response.Response;
import com.healthgenic.entities.user.dao.UserDaoInterface;
import com.healthgenic.entities.user.model.User;
@Service
public class UserService implements UserServiceInterface {
	@Autowired 
	private UserDaoInterface userDaoInterface;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Override
	public User getUser(User user) {
		User userFromDatabase = userDaoInterface.findByMobileNumberAndEmail(user.getMobileNumber(), user.getEmail());
		if(userFromDatabase != null){
			if(userFromDatabase.getPassword().matches(user.getPassword())){
				return userFromDatabase;
			}
		}

		return null;

	}

	@Override
	public Response createUser(User user) {
		User userFromDatabase = null;
		String redirectionUrl ="";
		try {
			user.setDateCreated(new java.util.Date());
			user.setPassword(passwordEncoder.encode(user.getPassword()));
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

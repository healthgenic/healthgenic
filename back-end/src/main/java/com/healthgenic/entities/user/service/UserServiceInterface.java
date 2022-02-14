package com.healthgenic.entities.user.service;

import com.healthgenic.entities.response.Response;
import com.healthgenic.entities.user.model.User;

public interface UserServiceInterface {
	public User getUser(User id);
	public Response createUser(User user);
    boolean isUserRegistrationDetailsValid(User user);

	boolean isUserPresent(long mobileNumber);
}

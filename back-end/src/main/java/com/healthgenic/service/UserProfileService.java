package com.healthgenic.service;

import com.healthgenic.model.DoctorProfile;
import com.healthgenic.model.UserProfile;

public interface UserProfileService {

    UserProfile getUserProfile(String username);

    UserProfile addUserProfile(UserProfile userProfile);
    
    DoctorProfile getDoctorProfile(String username);

	DoctorProfile addDoctorProfile(DoctorProfile doctorProfile);
}

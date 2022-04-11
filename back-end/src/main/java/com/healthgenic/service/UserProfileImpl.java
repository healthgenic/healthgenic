package com.healthgenic.service;

import com.healthgenic.model.DoctorProfile;
import com.healthgenic.model.UserProfile;
import com.healthgenic.repository.DoctorProfileRepository;
import com.healthgenic.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserProfileImpl implements UserProfileService {

    @Autowired
    private UserProfileRepository userProfileRepository;

    @Autowired
    private DoctorProfileRepository doctorProfileRepository;
    
    @Override
    public UserProfile getUserProfile(String username) throws UsernameNotFoundException {
        return userProfileRepository.findByUsername(username);
    }

    @Override
    public UserProfile addUserProfile(UserProfile userProfile) {
        return userProfileRepository.save(userProfile);
    }
    
    @Override
	public DoctorProfile getDoctorProfile(String username) {
		// TODO Auto-generated method stub
		doctorProfileRepository.findByUsername(username);
		return null;
	}

	@Override
	public DoctorProfile addDoctorProfile(DoctorProfile doctorProfile) {
		// TODO Auto-generated method stub
		return doctorProfileRepository.save(doctorProfile);
	}
}

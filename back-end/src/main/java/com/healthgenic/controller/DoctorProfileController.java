package com.healthgenic.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.healthgenic.model.DoctorProfile;
import com.healthgenic.model.UserProfile;
import com.healthgenic.payload.request.Username;
import com.healthgenic.service.UserProfileService;

@RestController
@RequestMapping("/doctor")
@CrossOrigin(origins = "http://localhost:3000/")
public class DoctorProfileController {

	@Autowired
	private UserProfileService userProfileService;
	
	@PostMapping("/doctorProfile")
    private ResponseEntity<Object> getDoctorProfile(@RequestBody Username username) {
        UserProfile userProfile = null;
        try {
            userProfile = userProfileService.getUserProfile(username.getUsername());
        } catch (UsernameNotFoundException notFound) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(userProfile);
    }
	
	@PostMapping("/add/Profile")
    private ResponseEntity<DoctorProfile> addDoctorProfile(@RequestBody DoctorProfile doctorProfile) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/doctor/add/profile").toUriString());
        return ResponseEntity.created(uri).body(userProfileService.addDoctorProfile(doctorProfile));
    }
}

package com.healthgenic.controller;

import com.healthgenic.model.UserProfile;
import com.healthgenic.payload.request.Username;
import com.healthgenic.service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000/")
public class UserController {

    @Autowired
    private UserProfileService userProfileService;

    @PostMapping("/profile")
    private ResponseEntity<Object> getUserprofile(@RequestBody Username username) {
        UserProfile userProfile = null;
        try {
            userProfile = userProfileService.getUserProfile(username.getUsername());
        } catch (UsernameNotFoundException notFound) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(userProfile);
    }

    @PostMapping("/add/profile")
    private ResponseEntity<UserProfile> adduserProfile(@RequestBody UserProfile userProfile) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/user/add/profile").toUriString());
        return ResponseEntity.created(uri).body(userProfileService.addUserProfile(userProfile));
    }
}

package com.healthgenic;

import com.healthgenic.model.Role;
import com.healthgenic.model.User;
import com.healthgenic.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import sun.tools.jar.CommandLine;

import java.util.ArrayList;

@SpringBootApplication
public class App{

	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}

	@Bean
	public BCryptPasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}

	@Bean
	CommandLineRunner run(UserService userService){
		return args -> {
			userService.saveRole(new Role(null, "ROLE_USER"));
			userService.saveRole(new Role(null, "ROLE_DOCTOR"));
			userService.saveRole(new Role(null, "ROLE_PATIENT"));
			userService.saveRole(new Role(null, "ROLE_ADMIN"));

			userService.saveUser(new User(null, "akshay", "aksh@123", "aksh", new ArrayList<Role>()));
			userService.saveUser(new User(null, "mahima", "mahima@123", "mahima", new ArrayList<Role>()));
			userService.saveUser(new User(null, "mahesh", "mahesh@123", "mahesh", new ArrayList<Role>()));
			userService.saveUser(new User(null, "ajay", "ajay@123", "ajay", new ArrayList<Role>()));

			userService.addRoleToUser("aksh@123", "ROLE_USER");
			userService.addRoleToUser("mahima@123", "ROLE_USER");
			userService.addRoleToUser("aksh@123", "ROLE_ADMIN");
			userService.addRoleToUser("mahima@123", "ROLE_DOCTOR");
			userService.addRoleToUser("mahesh@123", "ROLE_DOCTOR");
			userService.addRoleToUser("ajay@123", "ROLE_PATIENT");
		};
	}
}

package com.healthgenic.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.healthgenic.model.Role;
import com.healthgenic.model.User;
import com.healthgenic.payload.request.SignupRequest;
import com.healthgenic.payload.response.MessageResponse;
import com.healthgenic.service.UserService;
import com.healthgenic.util.StatusCode;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.stream.Collectors;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000/")
public class AuthController {
	
	@Autowired
	private UserService userService;
	private static final String TAG = AuthController.class.getSimpleName();

	@GetMapping("/users")
	private ResponseEntity<List<User>> getUsers() {
		return ResponseEntity.ok().body(userService.getUsers());
	}

	@GetMapping("/verify/accessToken")
    private ResponseEntity<MessageResponse> verifyJwtToken(@RequestParam String token){
        DecodedJWT jwt = JWT.decode(token);
        if( jwt.getExpiresAt().before(new Date())) {
            System.out.println("token is expired");
            return ResponseEntity.ok(new MessageResponse(StatusCode.ACCESS_TOKEN_EXPIRED, "Access Token Expired"));
        } else{
            return ResponseEntity.ok(new MessageResponse(StatusCode.ACCESS_TOKEN_VALID, "Access Token Valid"));
        }
    }
	
	private ResponseEntity<User> saveUser(@RequestBody User user) {
		URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/save").toUriString());
		return ResponseEntity.created(uri).body(userService.saveUser(user));
	}

	@PostMapping("/role/save")
	private ResponseEntity<Role> saveRole(@RequestBody Role role) {
		URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/role/save").toUriString());
		return ResponseEntity.created(uri).body(userService.saveRole(role));
	}

	/*
	 * private ResponseEntity<?> addRoleToUser(@RequestBody RoleToUserForm form) {
	 * userService.addRoleToUser(form.getUsername(), form.getRoleName()); return
	 * ResponseEntity.ok().build(); }
	 */

	@PostMapping("/register/user")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		if (userService.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity.badRequest()
					.body(new MessageResponse(StatusCode.USERNAME_ALREADY_EXIST, "Error: Username is already taken!"));
		}
		User user = new User();
		user.setUsername(signUpRequest.getUsername());
		user.setPassword(signUpRequest.getPassword());
		user.setName(signUpRequest.getName());

		Set<String> strRoles = signUpRequest.getRole();
		System.out.println(strRoles);
		List<Role> roles = new ArrayList<>();
		if (strRoles == null) {
			Role userRole = userService.getRole("ROLE_USER");
			roles.add(userRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
				case "ROLE_ADMIN":
					Role adminRole = userService.getRole("ROLE_ADMIN");
					roles.add(adminRole);
					break;
				case "ROLE_DOCTOR":
					Role doctorRole = userService.getRole("ROLE_DOCTOR");
					roles.add(doctorRole);
					break;
				case "ROLE_PATIENT":
					Role patientRole = userService.getRole("ROLE_PATIENT");
					roles.add(patientRole);
					break;
				default:
					Role userRole = userService.getRole("ROLE_USER");
					roles.add(userRole);
				}
			});
		}
		user.setRoles(roles);
		return saveUser(user);
	}

	@PostMapping("/token/refresh")
	private void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {

		String authHeader = request.getHeader(AUTHORIZATION);
		if (authHeader != null && authHeader.startsWith("Bearer ")) {
			try {
				String refreshToken = authHeader.substring("Bearer ".length());
				Algorithm algorithm = Algorithm.HMAC256("secret".getBytes(StandardCharsets.UTF_8));
				JWTVerifier verifier = JWT.require(algorithm).build();
				DecodedJWT decodedJWT = verifier.verify(refreshToken);
				String username = decodedJWT.getSubject();
				User user = userService.getUser(username);

				String accessToken = JWT.create().withSubject(user.getUsername())
						.withExpiresAt(new Date(System.currentTimeMillis() + 10 * 60 * 1000))
						.withIssuer(request.getRequestURL().toString())
						.withClaim("roles", user.getRoles().stream().map(Role::getName).collect(Collectors.toList()))
						.sign(algorithm);
				Map<String, String> tokens = new HashMap<>();
				tokens.put("accessToken", accessToken);
				tokens.put("refreshToken", refreshToken);
				response.setContentType(APPLICATION_JSON_VALUE);
				new ObjectMapper().writeValue(response.getOutputStream(), tokens);
			} catch (Exception e) {
				System.out.println(TAG + " Error logging in " + e.getMessage());
				response.setHeader("error", e.getMessage());
				response.setStatus(FORBIDDEN.value());
				Map<String, String> error = new HashMap<>();
				error.put("error_message", e.getMessage());
				response.setContentType(APPLICATION_JSON_VALUE);
				new ObjectMapper().writeValue(response.getOutputStream(), error);
			}
		} else {
			throw new RuntimeException("Refresh Token is Missing");
		}
	}

	@GetMapping("/delete/user")
	private void deleteUser(@RequestParam String username) {
		userService.deleteUser(username);
		// return new ResponseEntity<Boolean>(true, HttpStatus.CREATED);
	}
}

class RoleToUserForm {
	String username;
	String roleName;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
}

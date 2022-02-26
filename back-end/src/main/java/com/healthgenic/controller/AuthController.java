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
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
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
@AllArgsConstructor
@RequestMapping("/auth")
@Slf4j
public class UserController {
    private UserService userService;

    @GetMapping("/users")
    private ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok().body(userService.getUsers());
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

    private ResponseEntity<?> addRoleToUser(@RequestBody RoleToUserForm form) {
        userService.addRoleToUser(form.getUsername(), form.getRoleName());
        return ResponseEntity.ok().build();
    }

    @PostMapping("/register/user")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest){
        if (userService.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse(StatusCode.USERNAME_ALREADY_EXIST, "Error: Username is already taken!"));
        }
        User user = new User();
        user.setUsername(signUpRequest.getUsername());
        user.setPassword(signUpRequest.getPassword());
        user.setName(signUpRequest.getName());

        Set<String> strRoles = signUpRequest.getRole();
        List<Role> roles = new ArrayList<>();
        if (strRoles == null) {
            Role userRole = userService.getRole("ROLE_USER");
            roles.add(userRole);
        }else{
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
                log.info("Runnning at this point");

                String accessToken = JWT.create()
                        .withSubject(user.getUsername())
                        .withExpiresAt(new Date(System.currentTimeMillis() + 10 * 60 * 1000))
                        .withIssuer(request.getRequestURL().toString())
                        .withClaim("roles", user.getRoles().stream().map(Role::getName).collect(Collectors.toList()))
                        .sign(algorithm);
                log.info(accessToken);
                Map<String, String> tokens = new HashMap<>();
                tokens.put("accessToken", accessToken);
                tokens.put("refreshToken", refreshToken);
                /*JwtResponse jwtResponse = new JwtResponse();
                jwtResponse.setAccessToken(accessToken);
                jwtResponse.setRefreshToken(refreshToken);
                jwtResponse.setUsername(user.getUsername());
                jwtResponse.setRoles(user.getRoles().stream().map(Role::getName).collect(Collectors.toList()));*/

                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), tokens);
            } catch (Exception e) {
                log.error("Error logging in {}", e.getMessage());
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
    private void deleteUser(@RequestParam String username){
        userService.deleteUser(username);
        //return new ResponseEntity<Boolean>(true, HttpStatus.CREATED);
    }
}

@Data
class RoleToUserForm {
    String username;
    String roleName;
}

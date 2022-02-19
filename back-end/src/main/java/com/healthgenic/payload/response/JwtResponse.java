package com.healthgenic.payload.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JwtResponse {
    private Long id;
    private String accessToken;
    private String refreshToken;
    private String type = "Bearer";
    private String username;
    private List<String> roles;
}

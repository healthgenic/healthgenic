package com.healthgenic.payload.response;

import java.util.List;

public class JwtResponse {
    private Long id;
    private String accessToken;
    private String refreshToken;
    private String type = "Bearer";
    private String name;
    private String username;
    private List<String> roles;

    public JwtResponse() {
    }

    public JwtResponse(Long id, String accessToken, String refreshToken, String type,
                       String name, String username, List<String> roles) {
        this.id = id;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.type = type;
        this.name = name;
        this.username = username;
        this.roles = roles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}

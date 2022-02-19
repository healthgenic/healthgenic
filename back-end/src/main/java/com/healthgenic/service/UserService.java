package com.healthgenic.service;

import com.healthgenic.model.Role;
import com.healthgenic.model.User;

import java.util.List;

public interface UserService {

    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String username, String name);
    User getUser(String username);
    Role getRole(String name);
    List<User> getUsers();

    boolean existsByUsername(String username);

    void deleteUser(String username);
}

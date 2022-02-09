package com.healthgenic.entities.user.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.healthgenic.entities.user.model.User;

public interface UserDaoInterface extends JpaRepository<User, Long> {

}

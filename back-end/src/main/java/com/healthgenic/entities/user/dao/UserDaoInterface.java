package com.healthgenic.entities.user.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.healthgenic.entities.user.model.User;
import org.springframework.data.jpa.repository.Query;

public interface UserDaoInterface extends JpaRepository<User, Integer> {
    @Query(value = "SELECT * FROM user WHERE mobile_number = ?1", nativeQuery = true)
    User findByMobileNumber(Long mobileNumber);
    @Query(value = "SELECT * FROM user WHERE mobile_number = ?1 OR email = ?2", nativeQuery = true)
    User findByMobileNumberAndEmail(Long mobileNumber, String email);
}

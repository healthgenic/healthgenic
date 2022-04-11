package com.healthgenic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthgenic.model.DoctorProfile;

@Repository
public interface DoctorProfileRepository  extends JpaRepository<DoctorProfile, Long> {
	DoctorProfile findByUsername(String username);
}

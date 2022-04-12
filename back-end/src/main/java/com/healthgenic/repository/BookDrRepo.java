package com.healthgenic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthgenic.model.ClientData;


@Repository
public interface BookDrRepo extends JpaRepository<ClientData, Long> {
	//public ClientData getDetails(String userId);
}

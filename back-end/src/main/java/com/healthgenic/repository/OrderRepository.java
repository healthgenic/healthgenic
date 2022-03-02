package com.healthgenic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthgenic.model.Orders;

@Repository
public interface OrderRepository extends JpaRepository<Orders, Long> {
	public Orders findByOrderId(String orderId);
}

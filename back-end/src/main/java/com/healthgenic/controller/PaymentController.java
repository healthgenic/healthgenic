package com.healthgenic.controller;

import java.util.Map;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.healthgenic.model.Orders;
import com.healthgenic.repository.OrderRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class PaymentController {

	@Autowired
	private OrderRepository orderRespositery;

	@PostMapping("/create-order")
	@ResponseBody
	public String createOrder(@RequestBody Map<String, Object> data) throws Exception {
		System.out.println("On server: working with post axios get ");
		System.out.println(data);
		int amt = Integer.parseInt(data.get("amount").toString());
		RazorpayClient client = new RazorpayClient("rzp_test_ADUmf8lV5Avque", "M3uvxa92gEFAsF2Ax30cskDh");

		JSONObject ob = new JSONObject();
		ob.put("amount", amt * 100);
		ob.put("currency", "INR");
		ob.put("receipt", "txn_123456");

		// creating new order
		Order order = client.Orders.create(ob);
		System.out.println(order);

		// Storing the order in database
		Orders myOrder = new Orders();
		myOrder.setAmount(order.get("amount") + "");
		myOrder.setOrderId(order.get("id"));
		myOrder.setPaymentId(null);
		myOrder.setStatus("created");
		myOrder.setReceipt(order.get("receipt"));
		myOrder.setUid(String.valueOf(data.get("uid")));

		this.orderRespositery.save(myOrder);

		return order.toString();
	}

	@PostMapping("/update-order")
	public ResponseEntity<?> updateOrder(@RequestBody Map<String, Object> data) {
		System.out.println(data);
		Orders myOrder = this.orderRespositery.findByOrderId(data.get("order_id").toString());
		myOrder.setPaymentId(data.get("payment_id").toString());
		myOrder.setStatus(data.get("status").toString());

		this.orderRespositery.save(myOrder);

		return ResponseEntity.ok(" ");
	}
}

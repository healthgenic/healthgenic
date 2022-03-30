package com.healthgenic.payload.request;

public class Razorpay {

	private int amount;

	public Razorpay() {
		this.amount = amount;
	}

	public Razorpay(int amount) {
		this.amount = amount;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "Razorpay [amount=" + amount + "]";
	}
}

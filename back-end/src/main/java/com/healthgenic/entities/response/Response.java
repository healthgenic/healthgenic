package com.healthgenic.entities.response;

public class Response {
	private String urlToRedirect;
	private String message;

	public Response(String urlToRedirect, String message) {
		super();
		this.urlToRedirect = urlToRedirect;
		this.message = message;
	}

	public String getUrlToRedirect() {
		return urlToRedirect;
	}

	public void setUrlToRedirect(String urlToRedirect) {
		this.urlToRedirect = urlToRedirect;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}

package com.healthgenic.entities.response;

public class Response {
	private String urlToRedirect;
	
	public Response(String urlToRedirect) {
		super();
		this.urlToRedirect = urlToRedirect;
	}

	public String getUrlToRedirect() {
		return urlToRedirect;
	}

	public void setUrlToRedirect(String urlToRedirect) {
		this.urlToRedirect = urlToRedirect;
	}
	
}

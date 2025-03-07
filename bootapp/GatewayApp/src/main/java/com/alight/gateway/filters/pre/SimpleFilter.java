package com.alight.gateway.filters.pre;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;

public class SimpleFilter extends ZuulFilter {


	private static Logger log = LoggerFactory.getLogger(SimpleFilter.class);
	@Override
	public boolean shouldFilter() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public Object run() {
		RequestContext ctx = RequestContext.getCurrentContext();
	    HttpServletRequest request = ctx.getRequest();
	    if(!request.getRequestURI().contains("getpoll")) {
	    	if(request.getHeader("JWTToken") == null) {
	    		ctx.setResponseBody("Missing Token");
	    		ctx.setSendZuulResponse(false);
	    	} else {
	    		System.out.println("Token Received:" + request.getHeader("JWTToken"));
	    	}
	    }
	    log.info(String.format("%s request to %s", request.getMethod(), request.getRequestURL().toString()));

	    return null;
	}

	@Override
	public String filterType() {
		return "pre";
	}

	@Override
	public int filterOrder() {
		// TODO Auto-generated method stub
		return 1;
	}

}

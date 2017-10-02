package com.alight.poll;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alight.poll.model.BasicRequest;
import com.alight.poll.model.User;
import com.alight.poll.report.model.ReportDataService;
import com.alight.poll.report.util.ReportGeneratorService;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

@RestController
@SpringBootApplication
public class PollingAppApplication {

	@RequestMapping(value="/polldetails", produces="application/json")
	public Map<String, Object> pollDetails() {
		Map<String, Object> dataMap = new HashMap<String, Object>();
		dataMap.put("poll", "yes");
		return dataMap;
	}
	
	@RequestMapping(value="/getpoll", method=RequestMethod.POST ,produces="application/json")
	public Map<String, Object> authenticate(@RequestBody User user) {
		Map<String, Object> tokenMap = new HashMap<String, Object>();
		if(user.getEmailId() != null && user.getPollId() != null) {
			try {
			String token = JWT.create().withSubject(user.getEmailId()).withIssuedAt(new Date()).
					withClaim("roles", "user").sign(Algorithm.HMAC256("secretKey"));
			tokenMap.put("token", token);
			return tokenMap;
			} catch(UnsupportedEncodingException exception) {
				exception.printStackTrace();
			}
			
		}
		tokenMap.put("error", "Invalid access");
		return tokenMap;
	}
	@RequestMapping(value="/reportdata", method=RequestMethod.POST ,produces="application/json")
	public static Map<String, Object> getReportData(@RequestBody BasicRequest request) {
		Map<String, Object> reportData = new HashMap<String, Object>();
		 ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("bean.xml");
		 ReportGeneratorService service = (ReportGeneratorService)context.getBean(request.getReportType() + "Generator");
		context.close();
		return service.getReport();
	}
	
	public static void main(String[] args) {
		SpringApplication.run(PollingAppApplication.class, args);
	}
}

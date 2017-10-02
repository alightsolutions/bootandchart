package com.alight.poll.report.util;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.alight.poll.report.model.ReportDataService;

public class ReportGeneratorService {
	
	@Autowired
	ReportDataService reportService;
	
	public ReportDataService getReportService() {
		return reportService;
	}

	public void setReportService(ReportDataService reportService) {
		this.reportService = reportService;
	}

	public ReportGeneratorService() {
		// TODO Auto-generated constructor stub
	}
	
	public Map<String,Object> getReport() {
		return reportService.generateReport();
	}
}

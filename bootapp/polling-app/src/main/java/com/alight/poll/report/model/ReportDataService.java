package com.alight.poll.report.model;

import java.util.HashMap;
import java.util.Map;

public interface ReportDataService {
	public String reportType = null;
	
	public Map<String, Object> reportData = new HashMap<String, Object>();
	
	public Map<String, Object> generateReport();
}

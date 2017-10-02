package com.alight.poll.report.model;

import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class BarChartReportImpl implements ReportDataService {

	@Override
	public Map<String, Object> generateReport() {
		reportData.put("chartType", "Bar");
		return reportData;
	}

}

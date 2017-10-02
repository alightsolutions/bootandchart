package com.alight.poll.report.util;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.alight.poll.report.model.BarChartReportImpl;
import com.alight.poll.report.model.ReportDataService;

@Configuration
public class ReportingService {
	@Bean
	@ConditionalOnProperty(name = "chart.type", havingValue = "barchart", matchIfMissing = true)
	public ReportDataService getReportService() {
		return new BarChartReportImpl();
	}
}

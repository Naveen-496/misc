package com.loandemo.loandemo.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class LoanWrapper {

    private double originalAmount;
    private double interest;
    private LocalDate startDate;
    private LocalDate endDate;
    private double interestAmountPerMonth;
    private double totalInterestAmount;
    private double totalSum;
    private long noOfDays;
    private Long noOfMonths;
    private Long noOfYears;
    private String totalDaysInString;

}

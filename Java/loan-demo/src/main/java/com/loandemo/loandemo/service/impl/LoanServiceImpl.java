package com.loandemo.loandemo.service.impl;

import com.loandemo.loandemo.Domain.Loan;
import com.loandemo.loandemo.dto.LoanWrapper;
import com.loandemo.loandemo.repository.LoanRepository;
import com.loandemo.loandemo.response.JsonResponse;
import com.loandemo.loandemo.service.LoanService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class LoanServiceImpl implements LoanService {

    private LoanRepository loanRepository;

    @Autowired
    public LoanServiceImpl(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }

    @Override
    public JsonResponse saveLoan(Loan loan) {
        try {
            loan.setStartDate(LocalDate.now());
            return JsonResponse.getSuccessResponse(loanRepository.save(loan));
        } catch (Exception e) {
            log.error(e.getMessage());
            return JsonResponse.getFailureResponse(e.getMessage());
        }
    }


    @Override
    public JsonResponse updateLoan(Loan loan) {

        try {
            Optional<Loan> oldLoanOptional = loanRepository.findById(loan.getId());
            if (!oldLoanOptional.isPresent()) {
                return JsonResponse.getFailureResponse("Not found");
            }
            Loan oldLoan = oldLoanOptional.get();
            oldLoan.setAmount(loan.getAmount());
            oldLoan.setStartDate(loan.getStartDate());
            oldLoan.setInterest(loan.getInterest());
            oldLoan.setEndDate(loan.getEndDate());
            loanRepository.save(oldLoan);
            return JsonResponse.getSuccessResponse(oldLoan);

        } catch (Exception e) {
            log.error(e.getMessage());
            return JsonResponse.getFailureResponse(e.getMessage());
        }
    }

    @Override
    public JsonResponse deleteById(String loanId) {

        try {
            loanRepository.deleteById(loanId);
            return JsonResponse.getDoneResponse();
        } catch (Exception e) {
            log.error(e.getMessage());
            return JsonResponse.getFailureResponse(e.getMessage());
        }
    }

    @Override
    public JsonResponse findById(String loanId) {
        try {
            Optional<Loan> optionalLoan = loanRepository.findById(loanId);
            if (optionalLoan.isPresent()) {
                return JsonResponse.getSuccessResponse(optionalLoan.get());
            }
            return JsonResponse.getFailureResponse("Not found");
        } catch (Exception e) {
            log.error(e.getMessage());
            return JsonResponse.getFailureResponse(e.getMessage());
        }
    }

    @Override
    public JsonResponse findAll() {

        try {
            List<Loan> allLoans = loanRepository.findAll();
            return JsonResponse.getSuccessResponse(allLoans);
        } catch (Exception e) {
            log.error(e.getMessage());
            return JsonResponse.getFailureResponse(e.getMessage());
        }
    }

    public JsonResponse findByCustomerId(String customerId) {

        try {
            List<Loan>  allCustomerLoans = loanRepository.findByCustomerId( customerId);
            List<LoanWrapper> loanWrappers = calculateCurrentTotal( allCustomerLoans);
            return JsonResponse.getSuccessResponse( loanWrappers);
        } catch (Exception e) {
            log.error(e.getMessage());
            return JsonResponse.getFailureResponse(e.getMessage());
        }
    }

    private List<LoanWrapper> calculateCurrentTotal( List<Loan> allLoans ) {
        List<LoanWrapper> wrappers = new ArrayList<>();
        for ( Loan loan: allLoans ) {
            LoanWrapper loanWrapper = new LoanWrapper();
            loanWrapper.setOriginalAmount( loan.getAmount());
            loanWrapper.setInterest( loan.getInterest());
            loanWrapper.setStartDate( LocalDate.of(2020, 3, 1));
            loan.setStartDate( loanWrapper.getStartDate());
            LocalDate startDate = loan.getStartDate();
            // change this later
            LocalDate endDate = LocalDate.now();
            loan.setEndDate( endDate);
            loanWrapper.setEndDate( endDate);
            log.info("No of months until : {} ", startDate.until( endDate));
            Period period = Period.between( startDate, endDate);
            log.info("{} years, {} months, {} days ", period.getYears(), period.getMonths(), period.getDays());
            long noOfDays = ChronoUnit.DAYS.between( startDate, endDate);
            long noOfMonths = ChronoUnit.MONTHS.between( startDate, endDate);
            long noOfYears = ChronoUnit.YEARS.between( startDate, endDate);
            long remMonths = 40 % 12;
            int remDays = endDate.lengthOfMonth() - endDate.getDayOfMonth();
            log.info(" last day of this month: {} ", remDays);
            String totalDurationInString = noOfYears + " years " + remMonths + " months " + remDays + " days";
            loanWrapper.setTotalDaysInString( totalDurationInString);
            loanWrapper.setNoOfDays(noOfDays);
            loanWrapper.setNoOfMonths(noOfMonths);
            loanWrapper.setNoOfYears( noOfYears);
            log.info("No of days: {}, months: {}, years: {} ", noOfDays, noOfMonths, noOfYears);
            calculateLoanAmount(loanWrapper);
            double totalSum = loan.getAmount() + loanWrapper.getTotalInterestAmount();
            loanWrapper.setTotalSum( totalSum );
            wrappers.add( loanWrapper);
        }

        return wrappers;
    }

    private void calculateLoanAmount( LoanWrapper loanWrapper) {
        double loanInterest = loanWrapper.getInterest();
        double originalAmount = loanWrapper.getOriginalAmount();
        double noOf100s = originalAmount / 100;
        log.info("Total no of 100's in amount : {} is : {} ", originalAmount, noOf100s);
        double interestPerMonth = noOf100s * loanInterest;
        double interestTillCurrentMonth = interestPerMonth * loanWrapper.getNoOfMonths();
        loanWrapper.setInterestAmountPerMonth( interestPerMonth);
        loanWrapper.setTotalInterestAmount( interestTillCurrentMonth);

    }

    private void daysAndMonthsAndYears( Loan loan) {

        LoanWrapper loanWrapper = new LoanWrapper();
        LocalDate startDate = loan.getStartDate();
        LocalDate endDate = LocalDate.now();
        int startDateYear = startDate.getYear();
        int endDateYear = endDate.getYear();
        int diffYear = endDateYear - startDateYear;
     //   loanWrapper.setNoOfYears(diffYear);
        int currentMonth = endDate.getMonthValue();
        int startMonth = startDate.getMonthValue();
        int totalMonths = ( 12 - currentMonth) + ( diffYear * 12);
      //  loanWrapper.setNoOfMonths( Integer.toString(totalMonths));
    }
}

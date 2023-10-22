package com.loandemo.loandemo.service;

import com.loandemo.loandemo.Domain.Loan;
import com.loandemo.loandemo.response.JsonResponse;

import java.util.List;

public interface LoanService {

    JsonResponse saveLoan(Loan loan);

    JsonResponse findByCustomerId(String customerId);

    JsonResponse updateLoan( Loan loan);

    JsonResponse deleteById( String loanId);

    JsonResponse findById( String loanId);

    JsonResponse findAll();
}

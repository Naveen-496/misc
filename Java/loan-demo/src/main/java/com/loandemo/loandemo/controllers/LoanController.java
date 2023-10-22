package com.loandemo.loandemo.controllers;

import com.loandemo.loandemo.Domain.Loan;
import com.loandemo.loandemo.response.JsonResponse;
import com.loandemo.loandemo.service.LoanService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("loan")
@Slf4j
public class LoanController {

    private LoanService loanService;

    @Autowired
    public LoanController(LoanService loanService) {
        this.loanService = loanService;
    }

    @PostMapping("/save")
    public JsonResponse saveLoan(@RequestBody Loan loan) {

        try {
            return loanService.saveLoan(loan);
        } catch (Exception e) {
            log.error( e.getMessage());
            return JsonResponse.getFailureResponse( e.getMessage());
        }
    }

    @GetMapping("/loans/customer")
    public JsonResponse getLoansByCustomerId(@RequestParam String customerId) {

        try {
                return loanService.findByCustomerId( customerId );
        } catch (Exception e) {
            log.error( e.getMessage());
            return JsonResponse.getFailureResponse( e.getMessage());
        }

    }
}
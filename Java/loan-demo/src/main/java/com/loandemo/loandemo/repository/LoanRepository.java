package com.loandemo.loandemo.repository;

import com.loandemo.loandemo.Domain.Loan;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface LoanRepository extends MongoRepository<Loan, String> {

    List<Loan> findByCustomerId(String customerId);
}

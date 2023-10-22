package com.loandemo.loandemo.repository;

import com.loandemo.loandemo.Domain.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerRepository extends MongoRepository<Customer, String> {
}

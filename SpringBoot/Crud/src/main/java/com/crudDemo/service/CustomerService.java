package com.crudDemo.service;

import com.crudDemo.model.Customer;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CustomerService {


    Customer save(Customer customer);

    List<Customer> findAll();

    Customer update(Customer customer);

    Boolean deleteById(String id);

    Customer findById(String id);

}

package com.crudDemo.controller;

import com.crudDemo.model.Customer;
import com.crudDemo.repository.CustomerRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class CustomerController {
    @Autowired
    CustomerRepositoryImpl customerRepository;

   @RequestMapping(value = "/api/customer", method = RequestMethod.POST)
    public Map<List<Customer>, String> sampleController(@RequestBody Customer customer, @RequestParam String data) {
        Map<List<Customer>, String> res = new HashMap<>();
        customerRepository.save(customer);
        List<Customer> customers = customerRepository.findAll();
        res.put(customers, data);
        return  res;
    }
}

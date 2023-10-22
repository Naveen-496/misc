package com.loandemo.loandemo.controllers;

import com.loandemo.loandemo.Domain.Customer;
import com.loandemo.loandemo.response.JsonResponse;
import com.loandemo.loandemo.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    private CustomerService customerService;
    @Autowired
    public CustomerController( CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping(value = "/save")
    public JsonResponse saveCustomer(@RequestBody Customer customer) {
       try {
               return customerService.saveCustomer( customer );
       } catch (Exception e) {
          return JsonResponse.getFailureResponse(e.getMessage());
       }
    }

}

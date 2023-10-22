package com.loandemo.loandemo.service;

import com.loandemo.loandemo.Domain.Customer;
import com.loandemo.loandemo.response.JsonResponse;

public interface CustomerService {

    JsonResponse saveCustomer(Customer customer);
    JsonResponse updateCustomer( Customer customer);
    JsonResponse deleteCustomer(String customerId);
    JsonResponse findAllCustomers();
}

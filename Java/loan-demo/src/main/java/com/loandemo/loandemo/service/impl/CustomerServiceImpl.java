package com.loandemo.loandemo.service.impl;

import com.loandemo.loandemo.Domain.Customer;
import com.loandemo.loandemo.repository.CustomerRepository;
import com.loandemo.loandemo.response.JsonResponse;
import com.loandemo.loandemo.service.CustomerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class CustomerServiceImpl implements CustomerService {

    private CustomerRepository customerRepository;
    @Autowired
    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public JsonResponse saveCustomer(Customer customer) {
        try {
            Customer savedCustomer = customerRepository.save(customer);
            return JsonResponse.getSuccessResponse(savedCustomer);
        } catch ( Exception e) {
            System.out.println(e.getMessage());
                 return   JsonResponse.getFailureResponse(e.getMessage());
        }
    }

    @Override
    public JsonResponse updateCustomer(Customer customer) {
        try {
            Optional<Customer> oldCustomerOptional = customerRepository.findById(customer.getId());
            if( !oldCustomerOptional.isPresent() ) {
                return JsonResponse.getFailureResponse("Resource not found ");
            }
            Customer oldCustomer = oldCustomerOptional.get();
            oldCustomer.setName( customer.getName());
            oldCustomer.setPlace( customer.getPlace());
            oldCustomer.setPhoneNumber(customer.getPhoneNumber());
            customerRepository.save( oldCustomer);
            return JsonResponse.getSuccessResponse( oldCustomer);

        } catch ( Exception e) {
            log.error(e.getMessage());
            return JsonResponse.getFailureResponse(e.getMessage());
        }
    }

    @Override
    public JsonResponse deleteCustomer(String customerId) {
        try {
            customerRepository.deleteById( customerId );
            return JsonResponse.getDoneResponse();
        } catch ( Exception e) {
            log.error( e.getMessage() );
            return JsonResponse.getFailureResponse( e.getMessage() );
        }
    }

    @Override
    public JsonResponse findAllCustomers() {
        try {
            List<Customer> allCustomers = customerRepository.findAll();
            return JsonResponse.getSuccessResponse( allCustomers);
        } catch ( Exception e) {
            log.error( e.getMessage());
            return JsonResponse.getFailureResponse( e.getMessage());
        }
    }
}

package com.crudDemo.repository;

import com.crudDemo.model.Customer;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
@Repository
public class CustomerRepositoryImpl{

   private final List<Customer> customerList = new ArrayList<>();
   @PostConstruct
   public void initialiseList() {
       Customer customer = new Customer();
       customer.setId("12344");
       customer.setName("John Doe");
       customer.setMobileNumber(7845743889l);
       customer.setAccountId("343435");
       customerList.add(customer);
   }

   public Customer save(Customer customer) {
       customerList.add(customer);
       return customer;
   }

   public List<Customer>  findAll() {
       return customerList;
   }

   public Boolean deleteById(String id) {
       for(Customer customer: customerList) {
           if(customer.getId().equals(id)){
               customerList.remove(customer);
               return true;
           }
       }
       return false;
   }

}

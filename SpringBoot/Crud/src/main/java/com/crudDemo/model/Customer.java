package com.crudDemo.model;

import lombok.Data;

@Data
public class Customer {
    private String id;
    private String name;
    private Long mobileNumber;
    private String accountId;
}

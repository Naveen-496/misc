package com.crudDemo.model;

import lombok.Data;

@Data
public class Account {
    private String id;
    private Long accountNumber;
    private String customerId;
    private Status status;
}

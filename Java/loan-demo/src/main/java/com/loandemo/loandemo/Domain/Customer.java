package com.loandemo.loandemo.Domain;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document( collection = "customers")
@Data
public class Customer {

    private String id;
    private String name;
    private String place;
    private long phoneNumber;
    @Field
    private int noOfLoans = 0;

}

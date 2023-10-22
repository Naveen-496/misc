package com.loandemo.loandemo.Domain;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collection = "loan")
@Data
public class Loan {

    private String id;
    private double amount;
    private double interest;
    private LocalDate startDate;
    private LocalDate endDate;
    private String loadId;
    private String customerId;
    private String customerName;

}

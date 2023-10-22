package dev.reddy.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table( name = "order-items")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderItems {

    @Id
    @GeneratedValue( strategy = GenerationType.AUTO)
    private Long id;
    private String skuCode;
    private int quantity;
    private Double price;
}

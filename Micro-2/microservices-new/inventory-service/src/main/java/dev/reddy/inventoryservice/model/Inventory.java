package dev.reddy.inventoryservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@Table( name = "inventory")
@Entity
public class Inventory {

    @Id
    @GeneratedValue( strategy = GenerationType.AUTO)
    private Long id;
    private String skuCode;
    private Integer quantity;
}

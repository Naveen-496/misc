package dev.reddy.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import java.util.List;

@Entity
@Table( name = "orders")
@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class Order {

    @Id
    @GeneratedValue( strategy = GenerationType.AUTO)
    private Long id;
    private String orderNumber;

    @ManyToMany
    @Cascade( CascadeType.ALL)
    private List<OrderItems> orderItems;
}

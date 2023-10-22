package dev.reddy.kafkaproducer.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class Customer {

      private Integer id;
      private String name;
      private String email;
}

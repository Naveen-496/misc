package dev.reddy.springboottest.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table( name = "books")
public class Book {
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;
    private String title;
    private Integer pages;
    private String author;
}

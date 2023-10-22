package dev.reddy.springboottest.controller;

import dev.reddy.springboottest.model.Book;
import dev.reddy.springboottest.repo.TestBookRepository;
import jakarta.persistence.Temporal;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestController {

    @Autowired
    private TestBookRepository bookRepository;

    @Test
    public void shouldGetAllProducts() {
         bookRepository.save( new Book(null, "Test Book", 240, "Naveen Reddy"));
        List<Book> books = bookRepository.findAll();
         assertEquals( 3, bookRepository.count());
    }
}

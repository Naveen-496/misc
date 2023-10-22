package dev.reddy.springboottest.repo;

import dev.reddy.springboottest.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestBookRepository extends JpaRepository<Book, Integer> {
}

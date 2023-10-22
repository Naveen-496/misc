package dev.reddy.springboottest.service;

import dev.reddy.springboottest.model.Book;
import dev.reddy.springboottest.repo.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository bookRepository;

    public Book save(Book book) {
        return bookRepository.save( book );
    }

    public void update(Book book, Integer id ) {
        Optional<Book> optionalBook = bookRepository.findById( id );

        optionalBook.ifPresent( value -> {
            value.setAuthor( book.getAuthor());
            value.setPages(book.getPages());
            value.setTitle(book.getTitle());
            bookRepository.save( value );
        });
    }

    public Optional<Book> findById( Integer id ) {
        return bookRepository.findById( id );
    }

    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    public void deleteById( Integer id ) {
        bookRepository.deleteById( id );
    }

    public void deleteAll() {
        bookRepository.deleteAll();
    }

    public void deleteAllIn( List<Integer> ids ) {
        bookRepository.deleteAllById( ids );
    }

    public void deleteAllBooksIn( List<Book> books) {
        bookRepository.deleteAll( books );
    }
}

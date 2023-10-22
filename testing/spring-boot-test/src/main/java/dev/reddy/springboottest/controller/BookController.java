package dev.reddy.springboottest.controller;

import dev.reddy.springboottest.model.Book;
import dev.reddy.springboottest.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/books")
public class BookController {

     private final BookService bookService;

     @ResponseStatus( HttpStatus.CREATED)
     @PostMapping
     public Book saveBook(@RequestBody Book book) {
         return bookService.save( book );
     }

     @PutMapping("/{id}")
     public void updateBook( @RequestBody Book book, @PathVariable("id") Integer id) {
         bookService.update( book, id);
     }

     @GetMapping
     public List<Book> findAll() {
         return bookService.findAll();
     }

     @GetMapping("/{id}")
     public Book findById(@PathVariable("id") Integer id) {
         return bookService.findById(id).orElse( null) ;
     }

     @DeleteMapping("/{id}")
     @ResponseStatus(HttpStatus.OK)
    public void deleteById(@PathVariable("id") Integer id) {
         bookService.deleteById( id );
     }

     @DeleteMapping("/all")
     @ResponseStatus(HttpStatus.OK)
     public void deleteAll() {
         bookService.deleteAll();
     }

     @DeleteMapping("/ids")
     @ResponseStatus(HttpStatus.OK)
     public void deleteAllById( @RequestBody List<Integer> ids ) {
         bookService.deleteAllIn( ids );
     }
}

package dev.reddy.springboottest;

import dev.reddy.springboottest.model.Book;
import dev.reddy.springboottest.repo.TestBookRepository;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.client.RestTemplate;
import org.testcontainers.containers.PostgreSQLContainer;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class SpringBootTestApplicationTests {

//    static PostgreSQLContainer postgreSQLContainer =
//            new PostgreSQLContainer("postgres:latest");
    private static String baseUrl = "http://localhost";
    private static RestTemplate restTemplate;
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private TestBookRepository bookRepository;
    @LocalServerPort
    private int port;

    @BeforeAll
    public static void init() {
        restTemplate = new RestTemplate();
    }

//    @DynamicPropertySource
//    static void configure(DynamicPropertyRegistry registry) {
//        registry.add("spring.datasource.uri", postgreSQLContainer::getJdbcUrl);
//        registry.add("spring.datasource.username", postgreSQLContainer::getUsername);
//        registry.add("spring.datasource.password", postgreSQLContainer::getPassword);
//
//    }
//
//    @BeforeAll
//    static void beforeAll() {
//        postgreSQLContainer.start();
//    }
//
//    @AfterAll
//    static void afterAll() {
//        postgreSQLContainer.stop();
//    }

    @BeforeEach
    public void setUp() {
        if( baseUrl.contains("/api/books"))
            return;
        baseUrl = baseUrl.concat(":").concat(port + "").concat("/api/books");
    }

    @Test
    void contextLoads() {
    }

    @Test
    public void shouldAddBook() {
        Book book = Book.builder().author("Bob Edgar").pages(250).title("New Life").build();
        Book response = restTemplate.postForObject(baseUrl, book, Book.class);
        assert response != null;
        assertEquals(250, response.getPages());
        assertEquals(3, bookRepository.count());
    }

    @Test
    @Sql(statements = "INSERT INTO books (id, title, pages, author) VALUES (5, 'Spring Boot Test', 340, 'Naveen Reddy')", executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD)
    @Sql(statements = "DELETE FROM books WHERE id=5", executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD)
    public void shouldGetAllProducts() {
        List<Book> books = restTemplate.getForObject(baseUrl, List.class);
        assertEquals(books.size(), bookRepository.count());
    }

    @Test
    @Sql(statements = "INSERT INTO books (id, title, author, pages) VALUES (10, 'Why Are You Late', 'Someone', 220)", executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD)
    @Sql(statements = "DELETE FROM books where id=10", executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD)
    public void shouldGetTheBookById() {
        Book book = restTemplate.getForObject(baseUrl + "/{id}", Book.class, 3);
        assertAll(
                () -> assertNotNull(book),
                () -> assertEquals(3, book.getId()),
                () -> assertEquals(book.getPages(), 220)
        );
    }


}

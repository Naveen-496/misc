package dev.reddy.posts;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJdbcTest
@Testcontainers
@AutoConfigureTestDatabase( replace = AutoConfigureTestDatabase.Replace.NONE)
class PostRepositoryTest {


    @Container
    @ServiceConnection
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15.4");

    @Autowired
    PostRepository postRepository;

    @Test
    void connectionEstablished() {

        assertThat( postgres.isCreated()).isTrue();
        assertThat( postgres.isRunning()).isTrue();
    }

    @BeforeEach
    void setUp() {
        List<Post> posts = List.of(
                new Post(1, 1, "Hello, World", "First Post", null)
        );

        postRepository.saveAll( posts );
    }

    @Test
    void shouldReturnPostWhenGivenValidTitle() {

        Post post = postRepository.findByTitle("Hello, World");
        assertThat( post ).isNotNull();
        assertThat( post.title()).isEqualTo("Hello, World");
    }
}
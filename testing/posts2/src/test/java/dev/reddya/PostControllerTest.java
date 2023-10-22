package dev.reddya;

import dev.reddya.posts.Post;
import dev.reddya.posts.PostRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest( webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Testcontainers
public class PostControllerTest {


    @Autowired
    PostRepository postRepository;

    @Container
    @ServiceConnection
   static   PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15.4");

    @Test
    void shouldFindOnlySomePosts() {

        Page<Post> posts = postRepository.findAll(PageRequest.of(1, 20));

        assertThat( posts.getSize()).isEqualTo( 20 );
    }
}

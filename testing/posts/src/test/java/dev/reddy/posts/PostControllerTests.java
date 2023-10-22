package dev.reddy.posts;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import static org.assertj.core.api.Assertions.assertThat;

@Testcontainers
@SpringBootTest( webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Transactional
class PostControllerTests {

    @Container
    @ServiceConnection
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15.4");

    @Autowired
    TestRestTemplate restTemplate;

    @Test
    void shouldFindAllPosts() {
        // /api/posts
        Post[] posts = restTemplate.getForObject("/api/posts", Post[].class);
        assertThat( posts.length).isEqualTo(99);

    }

    @Test
    void shouldFindPostWhenGivenValidPostId() {
        // /api/posts/1

        ResponseEntity<Post> post = restTemplate.exchange("/api/posts/1", HttpMethod.GET, null, Post.class);
        assertThat( post.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat( post.getBody()).isNotNull();
    }

    @Test
    void shouldThrowNotFoundExceptionWhenInvalidPostId() {

        ResponseEntity<Post> postResponseEntity = restTemplate.exchange("/api/posts/999", HttpMethod.GET, null, Post.class);

        assertThat( postResponseEntity.getStatusCode()).isEqualTo( HttpStatus.NOT_FOUND);
    }

    @Test
    @Rollback
    void shouldCreatePostWhenPostIsValid() {

        Post newPost = new Post(102, 10, "New Post", "New Post for Test", null);

        ResponseEntity<Post> postResponseEntity = restTemplate.exchange("/api/posts", HttpMethod.POST, new HttpEntity<>(newPost), Post.class);
        assertThat( postResponseEntity.getStatusCode()).isEqualTo( HttpStatus.CREATED);
        assertThat( postResponseEntity.getBody()).isNotNull();
        assertThat( postResponseEntity.getBody().id()).isEqualTo( 102);
        assertThat( postResponseEntity.getBody().title()).isEqualTo("New Post");
        assertThat( postResponseEntity.getBody().body()).isEqualTo("New Post for Test");
    }


    @Test
    void shouldThrowBadRequestExceptionWhenPostIsNotValid() {

        Post post = new Post(103, 10, "", "", null);

        ResponseEntity<Post> entity = restTemplate.exchange("/api/posts", HttpMethod.POST, new HttpEntity<Post>(post), Post.class);
        assertThat( entity.getStatusCode()).isEqualTo( HttpStatus.BAD_REQUEST);
    }

    @Test
    @Rollback
    void shouldUpdatePostWhenGivenValidPost() {

        Post oldPost = new Post(1,1, "first post", "when first post created", null);

        ResponseEntity<Post> entity = restTemplate.exchange("/api/posts/1", HttpMethod.PUT, new HttpEntity<>(oldPost), Post.class);
        assertThat( entity.getStatusCode()).isEqualTo( HttpStatus.OK);
        assertThat( entity.getBody()).isNotNull();
        assertThat( entity.getBody().title()).isEqualTo("first post");
        assertThat( entity.getBody().id()).isEqualTo(1);
        assertThat( entity.getBody().body()).isEqualTo("when first post created");
    }

    @Test
    @Rollback
    void shouldDeletePostWhenGivenValidPostId() {

        ResponseEntity<Void> response = restTemplate.exchange("/api/posts/100", HttpMethod.DELETE, null, Void.class);
        assertThat( response.getStatusCode()).isEqualTo( HttpStatus.NO_CONTENT);
    }

}
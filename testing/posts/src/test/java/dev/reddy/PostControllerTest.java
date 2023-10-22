package dev.reddy;

import dev.reddy.posts.Post;
import dev.reddy.posts.PostController;
import dev.reddy.posts.PostRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static java.lang.StringTemplate.STR;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(PostController.class)
@AutoConfigureMockMvc
public class PostControllerTest {


    @Autowired
    MockMvc mockMvc;

    @MockBean
    PostRepository postRepository;

    private List<Post> posts = new ArrayList<>();

    @BeforeEach
    void setUp() {

        posts = List.of(
                new Post(1, 2, "Hello World", "This is my first post", null),
                new Post(2, 3, "Second Post", "This is my Second post", null)
        );
    }


    @Test
    void shouldGetAllPosts() throws Exception {

        String response = """
                                
                [
                   {
                     "id" : 1,
                     "userId": 2,
                     "title": "Hello World",
                     "body": "This is my first post",
                     "version": null
                   },
                   {
                     "id" : 2,
                     "userId": 3,
                     "title": "Second Post",
                     "body": "This is my Second post",
                     "version": null
                   }
                ]
                                
                """;

        when(postRepository.findAll()).thenReturn(posts);

        mockMvc.perform(get("/api/posts"))
                .andExpect(status().isOk())
                .andExpect(content().json(response));
    }

    // /api/posts/1
    @Test
    void shouldFindPostWhenGivenValidID() throws Exception {

        when(postRepository.findById(1)).thenReturn(Optional.of(posts.get(0)));

        var post = posts.get(0);

        var json = STR. """
                     {
                        "id":\{ post.id() },
                        "userId":\{ post.userId() },
                        "title":"\{ post.title() }",
                        "body":"\{ post.body() }",
                        "version":\{ post.version() }
                     }
                 """ ;

        mockMvc.perform(get("/api/posts/1"))
                .andExpect(status().isOk())
                .andExpect(content().json(json));
    }


    // /api/posts/999

    @Test
    void shouldThrowNotFoundExceptionWhenGivenInvalidId() throws Exception {

        // when( postRepository.findById( 1 )).thenReturn( Optional.of( posts.get(0)));

        mockMvc.perform(get("/api/posts/1"))
                .andExpect(status().isNotFound());

    }

    @Test
    void shouldCreatePostWhenValid() throws Exception {

        var post = posts.get(0);
        when(postRepository.save(post)).thenReturn(post);


        var json = STR. """
                     {
                        "id":\{ post.id() },
                        "userId":\{ post.userId() },
                        "title":"\{ post.title() }",
                        "body":"\{ post.body() }",
                        "version":\{ post.version() }
                     }
                 """ ;

        mockMvc.perform(
                        post("/api/posts")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(json)
                )
                .andExpect(status().isCreated())
                .andExpect(content().json(json));
    }

    @Test
    void shouldNotCreatePostWhenInvalid() throws Exception {

        var post = new Post(1, 2, "", "This is my first post", null);
        when(postRepository.save(post)).thenReturn(post);


        var json = STR. """
                     {
                        "id":\{ post.id() },
                        "userId":\{ post.userId() },
                        "title":"\{ post.title() }",
                        "body":"\{ post.body() }",
                        "version":\{ post.version() }
                     }
                 """ ;

        mockMvc.perform(
                        post("/api/posts")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(json)
                )
                .andExpect(status().isBadRequest());

    }

    @Test
    void shouldUpdatePostWhenGivenValidPost() throws Exception {

        var updated = new Post(1, 2, "New Title", "New Body", null);

        when( postRepository.findById( 1 )).thenReturn( Optional.of( updated ));
        when( postRepository.save( updated )).thenReturn( updated );

        var json = STR. """
                     {
                        "id":\{ updated.id() },
                        "userId":\{ updated.userId() },
                        "title":"\{ updated.title() }",
                        "body":"\{ updated.body() }",
                        "version":\{ updated.version() }
                     }
                 """ ;

        mockMvc.perform(
                        put("/api/posts/1")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(json)
                )
                .andExpect(status().isOk())
                .andExpect( content().json( json));


    }

    @Test
    void shouldDeletePostWhenGivenValidID() throws Exception {

       doNothing().when( postRepository).deleteById( 1 );
        mockMvc.perform(
                delete("/api/posts/1")
        ).andExpect( status().isNoContent());


        verify( postRepository, times(1)).deleteById( 1 );

    }
}

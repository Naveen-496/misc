package dev.reddy.postsclone;

import dev.reddy.postsclone.post.Post;
import dev.reddy.postsclone.post.PostController;
import dev.reddy.postsclone.post.PostRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static java.lang.StringTemplate.STR;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
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
                new Post(1, 1, "First Post", "When first post added", null),
                new Post(2, 1, "Second Post", "The Second Post", null)
        );
    }

    @Test
    void shouldFetchAllPosts() throws Exception {



         String json = STR."""
                 [
                   {
                     "id" : 1,
                     "userId" : 1,
                     "title" : "First Post",
                     "body" : "When first post added",
                     "version" : null
                   },
                   {
                     "id" : 2,
                     "userId" : 1,
                     "title" : "Second Post",
                     "body" : "The Second Post",
                     "version" : null
                   }
                 ]
                 """;

        when(postRepository.findAll()).thenReturn( posts );
        mockMvc.perform(get("/api/posts")).
                andExpect(status().isOk())
                .andExpect( content().json( json));
    }

}

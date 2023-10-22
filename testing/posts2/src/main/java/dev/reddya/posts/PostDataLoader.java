package dev.reddya.posts;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;

@Component
public class PostDataLoader implements CommandLineRunner {

    private final Logger log = LoggerFactory.getLogger( PostDataLoader.class);

    private final PostRepository postRepository;

    private final ObjectMapper objectMapper;

    public PostDataLoader(PostRepository postRepository, ObjectMapper objectMapper) {
        this.postRepository = postRepository;
        this.objectMapper = objectMapper;
    }

    @Override
    public void run(String... args) throws Exception {

        // if there are no posts in db then do this
        if ( postRepository.count() == 0) {

            String POST_JSON = "/data/posts.json";
            log.info("Loading posts into database from posts_json, {} ", POST_JSON);

            try (InputStream inputStream = TypeReference.class.getResourceAsStream(POST_JSON)) {
                Posts response = objectMapper.readValue( inputStream, Posts.class);
                log.info("These are the posts formed {} ", response);
                postRepository.saveAll(response.posts());
                log.info("finished loading data into the database");
            } catch ( IOException e) {
                log.error("failed to load Json Data , {} ", e.getMessage());
            }
        }
    }
}

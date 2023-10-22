package dev.reddy.postsclone.post;

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

        // postRepository.deleteAll();
         if ( postRepository.count() == 0 ) {

             String JSON_DATA = "/data/posts.json";
             log.info("loading the sample data into the database, {} ", JSON_DATA);

             try(InputStream inputStream = TypeReference.class.getResourceAsStream( JSON_DATA)) {

                 Posts response = objectMapper.readValue( inputStream, Posts.class);
               //  log.info("These are the posts to be saved , {} ", response.posts());
                 postRepository.saveAll(response.posts());
                 log.info("finished loading all the data ");

             } catch ( Exception e) {
                 log.error("Failed to load the data {} ", e.getMessage());
             }

         }
    }
}

package dev.reddy.postservice.util;

import dev.reddy.postservice.domain.Comment;
import dev.reddy.postservice.domain.Post;
import dev.reddy.postservice.domain.User;
import dev.reddy.postservice.repository.CommentRepository;
import dev.reddy.postservice.repository.PostRepository;
import dev.reddy.postservice.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.List;

@Component
@Slf4j
public class DataLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PostRepository postRepository;

    private final CommentRepository commentRepository;

    public DataLoader(UserRepository userRepository, PostRepository postRepository, CommentRepository commentRepository) {
        this.userRepository = userRepository;
        this.postRepository = postRepository;
        this.commentRepository = commentRepository;
    }


    @Override
    public void run(String... args) throws Exception {

        log.info("Saving pre data ");

            Post post1 = Post
                    .builder()
                    .id(1L)
                    .title("First Post")
                    .body("This is my First Post")
                    .build();

            Post post2 = Post
                    .builder()
                    .id(2L)
                    .title("Second Post")
                    .body("This is my Second Post")
                    .build();

            Comment comment1 = Comment
                    .builder()
                    .id(1L)
                    .comment("Awesome")
                    .likes(1)
                    .post(post1)
                    .build();

            User user1 = User
                    .builder()
                    .id(1L)
                    .firstname("Naveen")
                    .lastname("Reddy")
                    .username("Reddy496")
                    .dateOfBirth(Date.valueOf("1997-07-08"))
                    .email("naveen@gmail.com")
                    .age(26)

                    .build();

            post1.setUser(user1);
            post2.setUser(user1);

            post1.setComments(List.of(comment1));
            comment1.setUser(user1);

            userRepository.save(user1);
            postRepository.saveAll( List.of( post1, post2));
            commentRepository.saveAll( List.of( comment1));
            log.info("Data saved successfully");
            return;



        // userRepository.deleteAll();
    }


}

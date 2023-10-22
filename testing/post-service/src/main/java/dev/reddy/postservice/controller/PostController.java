package dev.reddy.postservice.controller;

import dev.reddy.postservice.domain.Post;
import dev.reddy.postservice.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
public class PostController {

    private final PostRepository postRepository;

    @GetMapping("/all")
    public List<Post> findAllPosts() {
        return postRepository.findAll();
    }
}

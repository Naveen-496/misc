package dev.reddy.dc.controller;

import dev.reddy.dc.model.Post;
import dev.reddy.dc.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/post")
public class PostController {

    @Autowired
    private PostRepository postRepository;
    @PostMapping
    public Post createPost(@RequestBody Post post) {
        return postRepository.save( post);
    }

    @GetMapping
    public List<Post> findAll() {
        return postRepository.findAll();
    }
}

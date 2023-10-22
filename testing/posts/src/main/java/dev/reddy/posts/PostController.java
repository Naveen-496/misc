package dev.reddy.posts;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final PostRepository postRepository;

    PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @GetMapping
    List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @GetMapping("/{id}")
    Post findById(@PathVariable Integer id) {
        return postRepository.findById(id).orElseThrow(PostNotFoundException::new);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    Post createPost(@RequestBody @Valid Post post) {
        return postRepository.save(post);
    }


    @ResponseStatus(HttpStatus.OK)
    @PutMapping("/{id}")
    Post updatePost(@PathVariable Integer id, @RequestBody Post post) {

        Optional<Post> existing = postRepository.findById(id);
        if (existing.isPresent()) {

            return postRepository.save(
                    new Post(
                            existing.get().id(),
                            existing.get().userId(),
                            post.title(),
                            post.body(),
                            existing.get().version()
                    )
            );


        } else {
            throw new PostNotFoundException();
        }

    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void deletePost( @PathVariable Integer id) {

        postRepository.deleteById( id );
    }

}

package dev.reddya.posts;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.*;
import org.springframework.data.relational.core.sql.In;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/posts")
@Slf4j
public class PostController {

    private PostRepository postRepository;

    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @GetMapping
    public Page<Post> findAll(@RequestParam Integer pageNum, @RequestParam Integer pageSize) {
        return postRepository.findAll(PageRequest.of( pageNum, pageSize ));
    }

    @GetMapping("/sort")
    public List<Post> findAllSorted() {

        Sort sort = Sort.by( Sort.Order.desc("title"));
        List<Post> posts = postRepository.findAll( sort);

        return posts;
    }

    @DeleteMapping
    @ResponseStatus( HttpStatus.OK )
    public void deletePostByTitle( String title ) {
        log.info("Got the title : {}", title);
        postRepository.deleteByTitle( title );
        log.info("deleted successfully");
    }


    @DeleteMapping("/{id}")
    public void deleteById(  @PathVariable Integer id ) {
        log.info("Got the id {} ", id );
        postRepository.deleteById( id );
    }

    @DeleteMapping("/user/{userId}")
    public void deleteByTitleAndUserId( @PathVariable Integer userId, @RequestParam String title){
         log.info("Got the request params userId : {} , and title {} ", userId, title);
         postRepository.deleteByTitleAndUserId( title, userId);
    }

    @GetMapping("/user/{userId}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Post> findByTitleAndUserId(@PathVariable Integer userId, @RequestParam String title) {
        return postRepository.findByTitleAndUserId( title, userId);
    }

    @GetMapping("/user/by/{userId}")
    public Page<Post> findByUserId(@PathVariable Integer userId) {
        Pageable pageable = PageRequest.of(0, 10, Sort.by("title").ascending());
        return postRepository.findByUserId( userId, pageable);
    }

    @GetMapping("/slice/{userId}")
    public Slice<Post> findByUserIdSlice( @PathVariable Integer userId) {
        return postRepository.findByUserId( userId );
    }

    @GetMapping("/five/{userId}")
    public List<Post> findTop5(@PathVariable Integer userId) {
        return postRepository.findTop5ByUserIdOrderByTitle( userId);
    }

    @GetMapping("/top")
    public Post findTop() {
        return postRepository.findTopByOrderByTitleDesc();
    }
}


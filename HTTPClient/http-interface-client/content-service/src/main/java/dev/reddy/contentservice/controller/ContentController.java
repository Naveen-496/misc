package dev.reddy.contentservice.controller;

import dev.reddy.contentservice.dto.Article;
import dev.reddy.contentservice.service.ArticleClient;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import io.github.resilience4j.timelimiter.annotation.TimeLimiter;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/content/")
public class ContentController {

    private ArticleClient articleClient;

    public ContentController( ArticleClient articleClient ) {
        this.articleClient = articleClient;
    }

    @PostMapping
    public Article create(@RequestBody Article article) {
        return articleClient.create( article );
    }

    @PutMapping("{id}")
    public void updateArticle(@RequestBody Article article, @PathVariable("id") Integer id) {
        articleClient.updateArticle( article, id);
    }

    @GetMapping("{id}")
    public Article getArticleById(@PathVariable("id") Integer id) {
        return articleClient.findById( id );
    }

    @GetMapping("all")
    @CircuitBreaker( name = "article", fallbackMethod = "findAllFallbackMethod")
    public List<Article> findAll() {
        return articleClient.findAll();
    }

    public List<Article> findAllFallbackMethod( RuntimeException runtimeException) {
        return List.of(
                new Article(20, "Dummy Article", "Dummy One"),
                new Article(21, "Some other article", "Fetched from fallback method")
        );
    }

    @DeleteMapping("{id}")
    public void deleteArticle(@PathVariable("id") Integer id) {
        articleClient.deleteArticle( id );
    }
}


package dev.reddy.articleservice.controller;

import dev.reddy.articleservice.model.Article;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/articles/")
public class ArticleController {

    private final List<Article> articles = new ArrayList<>();

    @PostConstruct
    public void init() {
        articles.addAll(
                List.of(
                        new Article(1, "FirstArticle", "My First Blog Post"),
                        new Article(2, "Spring Article", "Contains the spring articles"),
                        new Article(3, "JavaScript Article", "Contains js materials")
                )
        );
    }

    @GetMapping("/all")
    public List<Article> findAll() throws Exception {
       // Thread.sleep(6000);
        return articles;
    }

    @PostMapping
    public Article addArticle(@RequestBody Article article) {
        this.articles.add(article);
        return article;
    }

    @PutMapping("{id}")
    @ResponseStatus( HttpStatus.NO_CONTENT )
    public void updateArticle( @RequestBody Article article, @PathVariable("id") Integer id) {
        Optional<Article> exArticle = this.articles.stream()
                .filter(a -> a.id().equals( id ))
                .findFirst();
        exArticle.ifPresent( value -> articles.set( articles.indexOf( value ), article)
        );
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteArticle( @PathVariable("id") Integer id ) {
        articles.stream()
                .filter( a -> a.id().equals( id ))
                .findFirst()
                .ifPresent( value -> articles.remove( articles.indexOf( value )));
    }

    @GetMapping("{id}")
    public Article findArticleById(@PathVariable("id") Integer id) {
        return articles.stream()
                .filter(article -> article.id().equals(id))
                .findFirst()
                .orElse(null);
    }
}

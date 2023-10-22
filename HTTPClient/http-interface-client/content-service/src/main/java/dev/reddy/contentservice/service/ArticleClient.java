package dev.reddy.contentservice.service;

import dev.reddy.contentservice.dto.Article;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.service.annotation.DeleteExchange;
import org.springframework.web.service.annotation.GetExchange;
import org.springframework.web.service.annotation.PostExchange;
import org.springframework.web.service.annotation.PutExchange;

import java.util.List;

public interface ArticleClient {

    @GetExchange("/articles/all")
    List<Article> findAll();

    @PostExchange("articles/")
    Article create(@RequestBody Article article);


    @GetExchange("articles/{id}")
    Article findById(@PathVariable("id") Integer id);

    @PutExchange("articles/{id}")
    void updateArticle(@RequestBody Article article, @PathVariable("id") Integer id);

    @DeleteExchange("articles/{id}")
    void deleteArticle(@PathVariable("id") Integer id);
}

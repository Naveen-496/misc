package dev.reddy.dc.repository;

import dev.reddy.dc.model.Post;
import org.springframework.data.repository.ListCrudRepository;

public interface PostRepository extends ListCrudRepository<Post, Integer> {
}

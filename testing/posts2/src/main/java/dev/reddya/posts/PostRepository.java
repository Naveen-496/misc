package dev.reddya.posts;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.Sort;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends ListCrudRepository<Post, Integer> {

    Page<Post> findAll(Pageable pageable);

    List<Post> findAll(Sort sort);

    @Modifying
    @Query("delete from post where title = :title and user_id = :user_id")
    void deleteByTitleAndUserId(@Param("title") String title, @Param("user_id") Integer user_id);

    @Modifying
    @Query("delete from post where title = :title")
    void deleteByTitle(@Param("title") String title);

    @Query("select * from post where title = :title and user_id = :user_id")
    Optional<Post> findByTitleAndUserId(@Param("title") String title, @Param("user_id") Integer user_id);

    Page<Post> findByUserId( Integer userId, Pageable pageable);

    Slice<Post> findByUserId( Integer userId);

    List<Post> findTop5ByUserIdOrderByTitle(Integer userId);

    Post findTopByOrderByTitleDesc();

}

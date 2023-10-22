package dev.reddy.postservice.repository;

import dev.reddy.postservice.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}

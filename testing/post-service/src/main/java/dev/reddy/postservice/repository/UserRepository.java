package dev.reddy.postservice.repository;

import dev.reddy.postservice.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

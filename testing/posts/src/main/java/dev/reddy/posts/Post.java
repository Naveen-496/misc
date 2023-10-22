package dev.reddy.posts;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Version;

public record Post(
        @Id
        Integer id,
        Integer userId,
        @NotNull
        @NotEmpty
        String title,
        @NotNull
        @NotEmpty
        String body,
        @Version
        Integer version
) {
}

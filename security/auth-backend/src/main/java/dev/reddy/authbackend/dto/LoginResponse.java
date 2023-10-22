package dev.reddy.authbackend.dto;

import dev.reddy.authbackend.model.ApplicationUser;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LoginResponse {

    private ApplicationUser user;
    private String jwtToken;

}

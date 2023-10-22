package dev.reddy.jwtsymmetrickey2.controller;

import dev.reddy.jwtsymmetrickey2.service.TokenService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final TokenService tokenService;

    public AuthController(TokenService tokenService) {
        this.tokenService = tokenService;
    }

    @PostMapping("/token")
     public String getToken(Authentication authentication) {
         return tokenService.generateToken( authentication );
     }
}

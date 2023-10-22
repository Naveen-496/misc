package dev.reddy.controller;

import dev.reddy.dto.RegistrationDto;
import dev.reddy.models.ApplicationUser;
import dev.reddy.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authService;

    @PostMapping("/register")
    public ApplicationUser registerUser(@RequestBody RegistrationDto body) {
        return authService.registerUser(body.getUsername(), body.getPassword());
    }

}

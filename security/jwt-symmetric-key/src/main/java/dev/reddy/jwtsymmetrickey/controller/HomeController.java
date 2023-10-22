package dev.reddy.jwtsymmetrickey.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/post")
public class HomeController {

    @GetMapping
     public String getName(Authentication authentication) {
         return "Hello, " + authentication.getName();
     }
}

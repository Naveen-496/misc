package dev.reddy.controller;

import dev.reddy.models.Role;
import dev.reddy.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

     private final RoleRepository roleRepository;
    @GetMapping("/")
     public List<Role> helloUserController() {
         return roleRepository.findAll();
     }
}

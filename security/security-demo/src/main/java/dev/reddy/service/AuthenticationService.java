package dev.reddy.service;

import dev.reddy.models.ApplicationUser;
import dev.reddy.models.Role;
import dev.reddy.repository.RoleRepository;
import dev.reddy.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthenticationService {

    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    public ApplicationUser registerUser(String username, String password) {

        String enCodedPassword = passwordEncoder.encode(password);
        Role role = roleRepository.findByAuthority("USER").orElse( null );

        Set<Role> roles = new HashSet<>();
        roles.add(role);

        return userRepository.save(new ApplicationUser(0, username, enCodedPassword, roles));

    }
}

package dev.reddy.authbackend.service;

import dev.reddy.authbackend.model.ApplicationUser;
import dev.reddy.authbackend.model.Role;
import dev.reddy.authbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private PasswordEncoder encoder;
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.info("Inside the UserService object");
        ApplicationUser user = userRepository.findByUsername( username).get();
        log.info("User found {} ", user);
          if( username.equals("admin")) {
              log.info("admin user");
              return new ApplicationUser("admin", encoder.encode("pass123"), new HashSet<>());
          }
        return user;
    }
}

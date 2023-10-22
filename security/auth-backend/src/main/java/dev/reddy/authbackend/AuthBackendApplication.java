package dev.reddy.authbackend;

import dev.reddy.authbackend.model.ApplicationUser;
import dev.reddy.authbackend.model.Role;
import dev.reddy.authbackend.repository.RoleRepository;
import dev.reddy.authbackend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class AuthBackendApplication {

    public static void main(String[] args) {

        SpringApplication.run(AuthBackendApplication.class, args);
    }

	@Bean
    CommandLineRunner runner(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder encoder) {
        return args -> {
            System.out.println("😇");

            if (roleRepository.findByAuthority("ADMIN").isEmpty()) {
                Role adminRole = roleRepository.save(new Role("ADMIN"));
                roleRepository.save(new Role("USER"));

                Set<Role> roles = new HashSet<>();
                roles.add(adminRole);



                userRepository.save(new ApplicationUser("admin", encoder.encode("pass123"), roles));
            }

        };
    }

}

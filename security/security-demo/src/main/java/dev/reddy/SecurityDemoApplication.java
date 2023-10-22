package dev.reddy;

import dev.reddy.models.ApplicationUser;
import dev.reddy.models.Role;
import dev.reddy.repository.RoleRepository;
import dev.reddy.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
// @EnableScheduling
public class SecurityDemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(SecurityDemoApplication.class, args);
    }

    @Bean
    CommandLineRunner run(RoleRepository roleRepository, UserRepository userRepository,
                          PasswordEncoder passwordEncoder) {
        return args -> {

            if (roleRepository.findByAuthority("ADMIN").isPresent()) {
                return;
            }

            Role adminRole = roleRepository.save(new Role("ADMIN"));
            roleRepository.save(new Role("USER"));

            Set<Role> roles = new HashSet<>();
            roles.add(adminRole);
            ApplicationUser admin = new ApplicationUser(1, "Naveen", passwordEncoder.encode("password"),
                    roles);


        };
    }


}

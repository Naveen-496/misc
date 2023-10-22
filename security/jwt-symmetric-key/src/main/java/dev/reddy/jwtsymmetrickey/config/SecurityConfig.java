package dev.reddy.jwtsymmetrickey.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
     public UserDetailsService userDetailsService() {
         return new InMemoryUserDetailsManager(
                 User.withUsername("Naveen")
                         .password("{noop}passw")
                         .authorities("READ", "ROLE_USER")
                         .build());
     }

     @Bean
     public SecurityFilterChain securityFilterChain(HttpSecurity http ) throws Exception {
        return  http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests( auth -> {
                    auth.anyRequest().hasAuthority("SCOPE_READ");
                })
                .oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt)
                .build();
     }
}

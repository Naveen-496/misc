package dev.reddy.security.demis3;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http ) throws Exception {

        var authProvider = new RobotAuthenticationProvider( List.of("beep", "boop"));
        var authManager = new ProviderManager( authProvider );

        return http
                .authorizeHttpRequests( auth -> {
                    auth.requestMatchers("/").permitAll();
                    auth.requestMatchers("/error").permitAll();
                    auth.anyRequest().authenticated();
                })
                .addFilterBefore( new RobotFilter( authManager), UsernamePasswordAuthenticationFilter.class)
                .build();
    }
}

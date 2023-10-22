package dev.reddy.securitydemistified;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return
                http.authorizeHttpRequests(authConfig -> {
                    authConfig.requestMatchers("/").permitAll();
                    authConfig.requestMatchers("/error").permitAll();
                    authConfig.requestMatchers("/fevicon").permitAll();
                    authConfig.anyRequest().authenticated();
                })
                        .formLogin( Customizer.withDefaults())
                        .oauth2Client( Customizer.withDefaults())
                        .addFilterBefore( new RobotFilter(), UsernamePasswordAuthenticationFilter.class)
                        .authenticationProvider( new NaveenAuthenticationProvider())
                        .build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return new InMemoryUserDetailsManager(
                User.builder()
                        .username("naveen")
                        .password("{noop}pass123")
                        .authorities("ROLE_user")
                        .build()
        );
    }
}

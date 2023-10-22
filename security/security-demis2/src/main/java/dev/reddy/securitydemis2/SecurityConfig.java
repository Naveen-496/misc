package dev.reddy.securitydemis2;

import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.event.AuthenticationSuccessEvent;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.security.Provider;
import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {





    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {


        var authProvider = new RobotAuthenticationProvider(List.of("beep-boop", "boop-beep"));
        var authManager = new ProviderManager(  authProvider );



         return  http
                 .authorizeHttpRequests( auth -> {
                     auth.requestMatchers("/", "/error").permitAll();
                     auth.anyRequest().authenticated();
                 })
                 .formLogin(Customizer.withDefaults())
                 .addFilterBefore( new RobotFilter(authManager), UsernamePasswordAuthenticationFilter.class)
                 .build();
    }


    @Bean
    public ApplicationListener<AuthenticationSuccessEvent> successEvent() {

        return event -> {
            System.out.println(String.format("⚜ SUCCESS [%s] %s", event.getAuthentication().getClass().getName() ));
        };

    }
}

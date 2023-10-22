package dev.reddy.securitydemistified;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class WebController {

    private static String getName(Authentication authentication) {

        return Optional.of(authentication.getPrincipal())
                .filter(OidcUser.class::isInstance)
                .map(OidcUser.class::cast)
                .map(OidcUser::getEmail)
                .orElseGet(authentication::getName);

    }

    @GetMapping("/")
    public String publicPage() {
        return "Hello from Spring Boot 🥰!\n";
    }

    @GetMapping("/private")
    public String privatePage() throws InterruptedException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("OUTSIDE THE THREAD : " + authentication);

        Thread t = new Thread(() -> {
            Authentication a = SecurityContextHolder.getContext().getAuthentication();
            System.out.println("IN THREAD : " +  a);

        });
        t.start();
        t.join();

        return "Hello, Welcome to vip access " +
                "~[ " + authentication.getName() + " ]~ 👰🍾\n";

    }

}

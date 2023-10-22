package dev.reddy.securitydemis2;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.Authenticator;

@RestController
public class WebController {

    @GetMapping("/")
    public String publicParty() {
        return "Hello, Welcome to public party\n";
    }

    @GetMapping("/private")
    public String privateParty() {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        return "Hello, Welcome to the private party ~[ 😈 ]~\n";
    }
}

package dev.reddy.security.demis3;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebController {

    @GetMapping("/")
    public String publicParty() {
        return "Welcome to the public party\n";
    }

    @GetMapping("/private")
    public String privateParty() {

        var authentication = SecurityContextHolder.getContext().getAuthentication();
        return "Welcome to the private party ~[ " + authentication.getName() + " ]~ 🤩\n";
    }
}

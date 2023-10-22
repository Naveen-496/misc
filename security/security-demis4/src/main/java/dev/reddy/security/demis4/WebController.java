package dev.reddy.security.demis4;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebController {

    @GetMapping("/")
    String publicParty() {
        return "Hello, Welcome to the public party\n";
    }

    @GetMapping("/private")
    String privateParty() {
        return "Hello, welcome to the private party 😍!\n";
    }
}

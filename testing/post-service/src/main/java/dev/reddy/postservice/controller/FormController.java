package dev.reddy.postservice.controller;

import dev.reddy.postservice.domain.FormData;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/form")
@Slf4j
@CrossOrigin( origins = "localhost:3000")
public class FormController {

    @PostMapping
    public FormData post(@RequestBody FormData formData) {
        log.info("Received the form data : {}", formData);
        return formData;
    }
}

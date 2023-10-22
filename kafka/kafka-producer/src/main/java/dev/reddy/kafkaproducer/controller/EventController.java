package dev.reddy.kafkaproducer.controller;

import dev.reddy.kafkaproducer.dto.Customer;
import dev.reddy.kafkaproducer.service.KafkaService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.kafka.retrytopic.DestinationTopic;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/message")
@RequiredArgsConstructor
@Slf4j
public class EventController {

    private final KafkaService kafkaService;

    @GetMapping
    public void sendMessage(@RequestParam String message ) {

        try {
            for( int i = 0; i < 100; i++) {
               // kafkaService.sendMessageToTopic(message + " : " + i + 1);
            }

        } catch ( Exception e ) {
            log.error("error {} ",e.getMessage());
        }
    }

    @PostMapping
    public void sendCustomer(@RequestBody Customer customer) {

        try {
            kafkaService.sendCustomerToTopic( customer);
        } catch ( Exception e) {
            log.error("Error: {} ", e.getMessage());
        }
    }
}

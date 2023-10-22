package dev.reddy.kafkaproducer.service;

import dev.reddy.kafkaproducer.dto.Customer;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;

@Service
@RequiredArgsConstructor
@Slf4j
public class KafkaService {

  //  private final KafkaTemplate<String, Object> stringObjectKafkaTemplate;
    private final KafkaTemplate<String, Customer> customerKafkaTemplate;

//       public void sendMessageToTopic( String message) {
//           CompletableFuture<SendResult<String, Object>> future = stringObjectKafkaTemplate.send("reddy-topic-1", message);
//
//           future.whenComplete( ( result, ex ) -> {
//                if( ex == null ) {
//                    log.info("Message {} sent successfully with offset {} ", message, result.getRecordMetadata().offset());
//                } else {
//                    log.error("message failed to send due to {} ", ex.getMessage());
//                }
//           });
//       }

    public void sendCustomerToTopic(Customer customer) {
        CompletableFuture<SendResult<String, Customer>> future = customerKafkaTemplate.send("customer-topic", customer);

        future.whenComplete( ( result, ex ) -> {
            if( ex == null ) {
                log.info("Message {} sent successfully with offset {} ", customer, result.getRecordMetadata().offset());
            } else {
                log.error("message failed to send due to {} ", ex.getMessage());
            }
        });
    }
}

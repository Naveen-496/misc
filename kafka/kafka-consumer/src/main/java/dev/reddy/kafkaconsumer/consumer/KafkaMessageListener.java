package dev.reddy.kafkaconsumer.consumer;

import dev.reddy.kafkaconsumer.dto.Customer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class KafkaMessageListener {


      Logger log = LoggerFactory.getLogger( KafkaMessageListener.class);

      @KafkaListener( topics = "reddy-topic-1", groupId = "group1")
      public void listen( String message ) {
         log.info("Successfully received the message - {} ", message);
      }

      @KafkaListener( topics = "customer-topic", groupId = "cst")
      public void customerListener(List<Customer> customers) {
          log.info("Got the customer object - {} ", customers);
      }
}

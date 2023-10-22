package dev.reddy;

import dev.reddy.dto.Order;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class KafkaListeners {

    @KafkaListener( topics = "topic1", groupId = "groupId")
    void listener( String data ) {
      log.info("Listener received for - {} ", data);
    }

    @KafkaListener( topics = "orderTopic", groupId = "orderGroup")
    void orderListener(Order order) {
        log.info("Order received with order no : {} and order name : {}",
                order.getOrderNumber(), order.getName());
    }
}

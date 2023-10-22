package dev.reddy;

import dev.reddy.dto.Order;
import org.apache.kafka.common.protocol.types.Field;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.core.KafkaTemplate;

@SpringBootApplication
public class KafkaExampleApplication {

    public static void main(String[] args) {
        SpringApplication.run(KafkaExampleApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(KafkaTemplate<String, String> kafkaTemplate) {
        return args -> {
            for (int i = 0; i < 100; i++)
                kafkaTemplate.send("topic1", "Hello Kafka : " + i);
        };
    }

    @Bean
    CommandLineRunner commandLineRunner2(
            KafkaTemplate<String, Order> orderKafkaTemplate) {

        return args -> {
            orderKafkaTemplate.send("orderTopic", new Order("12345", "Iphone_13"));
        };
    }

}

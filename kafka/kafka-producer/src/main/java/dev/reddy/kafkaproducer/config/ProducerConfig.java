package dev.reddy.kafkaproducer.config;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ProducerConfig {

    @Bean
    public NewTopic createTopic() {
        return new NewTopic("reddy-topic-1", 5, ( short) 1);
    }
    @Bean
    public NewTopic customerTopic() {
        return new NewTopic("customer-topic", 2, (short) 1);
    }
}

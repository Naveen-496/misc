package dev.reddy.config;

import dev.reddy.dto.Order;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.support.serializer.JsonSerializer;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class KafkaProducerConfig {

    @Value("${spring.kafka.bootstrap-servers}")
    private String bootstrapServers;

    @Bean
    public Map<String, Object> producerStringConfig() {
        Map<String, Object> props = new HashMap<>();
        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);

        return props;
    }

    @Bean
    public ProducerFactory<String, String> producerFactoryString(
            Map<String, Object> producerStringConfig) {
        return new DefaultKafkaProducerFactory<>(producerStringConfig);
    }

    @Bean
    public KafkaTemplate<String, String> kafkaTemplateString() {
        return new KafkaTemplate<>(producerFactoryString( producerStringConfig()));
    }

    @Bean
    public Map<String, Object> producerOrderConfig() {
        Map<String, Object> orderConfig = new HashMap<>();
        orderConfig.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        orderConfig.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        orderConfig.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
        return orderConfig;
    }

    @Bean
    public ProducerFactory<String, Order> producerFactoryOrder(
            Map<String, Object> producerOrderConfig) {
        return new DefaultKafkaProducerFactory<>(producerOrderConfig);
    }

    @Bean
    public KafkaTemplate<String, Order> kafkaTemplateOrder() {
        return new KafkaTemplate<>(producerFactoryOrder( producerOrderConfig()));
    }
}

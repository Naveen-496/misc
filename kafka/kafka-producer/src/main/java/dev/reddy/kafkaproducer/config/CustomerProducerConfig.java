//package dev.reddy.kafkaproducer.config;
//
//import dev.reddy.kafkaproducer.dto.Customer;
//import org.apache.kafka.clients.producer.ProducerConfig;
//import org.apache.kafka.common.serialization.StringSerializer;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.kafka.core.DefaultKafkaProducerFactory;
//import org.springframework.kafka.core.KafkaTemplate;
//import org.springframework.kafka.core.ProducerFactory;
//import org.springframework.kafka.support.serializer.JsonSerializer;
//
//import java.util.HashMap;
//import java.util.Map;
//
//@Configuration
//public class CustomerProducerConfig {
//
//    @Value("${spring.kafka.bootstrap-servers}")
//     private String bootstrapServers;
//
//    @Bean
//     public Map<String, Object> producedConfig() {
//         Map<String, Object>  props = new HashMap<>();
//         props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers );
//         props.put( ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
//         props.put(  ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
//
//         return  props;
//     }
//
//     @Bean
//     public ProducerFactory<String, Customer> producerFactory () {
//         return new DefaultKafkaProducerFactory<>( producedConfig());
//     }
//
//     @Bean
//     public KafkaTemplate<String, Customer> customerKafkaTemplate() {
//         return new KafkaTemplate<>( producerFactory());
//     }
//}

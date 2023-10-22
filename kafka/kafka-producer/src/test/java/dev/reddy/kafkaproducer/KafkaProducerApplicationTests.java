package dev.reddy.kafkaproducer;

import dev.reddy.kafkaproducer.dto.Customer;
import dev.reddy.kafkaproducer.service.KafkaService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.testcontainers.containers.KafkaContainer;
import org.testcontainers.junit.jupiter.Testcontainers;
import org.testcontainers.utility.DockerImageName;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

import static org.testcontainers.shaded.org.awaitility.Awaitility.await;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Testcontainers
class KafkaProducerApplicationTests {

    static KafkaContainer kafkaContainer = new KafkaContainer(DockerImageName.parse(
            "confluentinc/cp-kafka:latest"
    ));
    @Autowired
    private KafkaService kafkaService;

    @DynamicPropertySource
    static void configureKafkaProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.kafka.bootstrap-servers", kafkaContainer::getBootstrapServers);
    }


    @Test
    void contextLoads() {
    }

    @Test
    public void shouldSendEventToKafka() {
        kafkaService.sendCustomerToTopic(new Customer(2332, "Noone", "noone@gmail.com"));
        await().pollInterval(Duration.ofSeconds(3)).atMost(10, TimeUnit.SECONDS).untilAsserted(
				() -> {}
		);
    }

}

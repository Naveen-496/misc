package dev.reddy.testcontainers;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.testcontainers.containers.MongoDBContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.utility.DockerImageName;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class TestContainersApplicationTests {


	@Container
	static MongoDBContainer mongoDBContainer =
			new MongoDBContainer(DockerImageName.parse("mongo:latest"));

	@DynamicPropertySource
	static void configureMongodbDriver(DynamicPropertyRegistry registry) {
		registry.add("spring.data.mongodb.uri", mongoDBContainer::getReplicaSetUrl);
	}

	@BeforeAll
	static void beforeAll() {
		mongoDBContainer.start();
	}

	@AfterAll
	static void afterAll() {
		mongoDBContainer.stop();
	}

	@Autowired
	private BookRepository bookRepository;

	@Test
	void contextLoads() {

		bookRepository.save( new Book("1", "Mongo db", "Naveen Reddy", 240));
		List<Book> books = bookRepository.findAll();
		assertEquals( 1, books.size());
	}

}

package dev.reddy.testcontainers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.MongoRepository;

@SpringBootApplication
public class TestContainersApplication {

	public static void main(String[] args) {
		SpringApplication.run(TestContainersApplication.class, args);
	}

}

record Book ( String id, String title, String author, Integer pages){}

interface BookRepository extends MongoRepository<Book, String> {

}


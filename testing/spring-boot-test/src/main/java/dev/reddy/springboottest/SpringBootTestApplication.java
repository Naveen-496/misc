package dev.reddy.springboottest;

import dev.reddy.springboottest.model.Book;
import dev.reddy.springboottest.repo.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class SpringBootTestApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootTestApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(BookRepository bookRepository) {
		return args -> {
			bookRepository.saveAll(
					List.of(
							Book.builder()
									.author("Josh Milga")
									.pages(120)
									.title("Good Habits")
									.build(),
							Book.builder()
									.title("How To Influence People")
									.pages(200)
									.author("Harry Potter")
									.build()
					)
			);
		};
	}

}

package dev.reddy.dc;

import dev.reddy.dc.model.Post;
import dev.reddy.dc.repository.PostRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DcApplication {

	public static void main(String[] args) {
		SpringApplication.run(DcApplication.class, args);


	}

	@Bean
	CommandLineRunner commandLineRunner(PostRepository repository){

		return args -> repository.save( new Post("Hello, World", "My First Post"));


	}

}

package dev.reddy.securitydemistified;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SecurityDemistifiedApplication {


	private ApiService apiService;
	public static void main(String[] args) {
		SpringApplication.run(SecurityDemistifiedApplication.class, args);
	}

//	@Bean
//	CommandLineRunner runner( ApiService apiService) {
//		return args -> {
//			apiService.makeApiRequest();
//		};
//
//	}

}

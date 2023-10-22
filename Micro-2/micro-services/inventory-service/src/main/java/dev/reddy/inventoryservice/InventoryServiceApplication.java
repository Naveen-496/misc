package dev.reddy.inventoryservice;

import dev.reddy.inventoryservice.model.Inventory;
import dev.reddy.inventoryservice.repository.InventoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class InventoryServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventoryServiceApplication.class, args);
	}

	@Bean
	public CommandLineRunner loadData(InventoryRepository inventoryRepository) {
		return args -> {
			Inventory inventory = Inventory
					.builder()
					.skuCode("Iphone_12")
					.quantity( 0 )
					.build();

			Inventory inventory1 = Inventory
					.builder()
					.skuCode("Iphone_13_white")
					.quantity( 5 )
					.build();

			inventoryRepository.save( inventory);
			inventoryRepository.save( inventory1);
		};
	}

}

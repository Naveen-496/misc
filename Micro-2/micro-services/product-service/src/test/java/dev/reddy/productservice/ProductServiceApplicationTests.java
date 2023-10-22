package dev.reddy.productservice;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import dev.reddy.productservice.dto.ProductRequest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.testcontainers.containers.MongoDBContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import java.math.BigDecimal;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@Testcontainers
class ProductServiceApplicationTests {
	@Container
   static MongoDBContainer mongoDBContainer = new MongoDBContainer("mongo:4.4.2");

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private ObjectMapper objectMapper;

  @DynamicPropertySource
   static void setProperties(DynamicPropertyRegistry dynamicPropertyRegistry) {
	   dynamicPropertyRegistry.add("spring.data.mongodb.uri", mongoDBContainer::getReplicaSetUrl);
   }
	@Test
	void shouldCreateProduct() throws Exception {

     ProductRequest productRequest = getProduct();
	 String productRequestString = objectMapper.writeValueAsString( productRequest);

	  mockMvc
			  .perform(MockMvcRequestBuilders.post("/api/product")
					  .contentType(MediaType.APPLICATION_JSON)
					  .content( productRequestString ))
			  .andExpect( status().isCreated());

	}

	private ProductRequest getProduct() {
	  return ProductRequest
			  .builder()
			  .name( "Nike Air")
			  .description("Water proof")
			  .price(BigDecimal.valueOf(1400.00))
			  .build();

	}

}

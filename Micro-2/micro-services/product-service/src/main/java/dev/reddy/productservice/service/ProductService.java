package dev.reddy.productservice.service;

import dev.reddy.productservice.dto.ProductRequest;
import dev.reddy.productservice.dto.ProductResponse;
import dev.reddy.productservice.model.Product;
import dev.reddy.productservice.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProductService {

   private final ProductRepository  productRepository;

    public void saveProduct(ProductRequest productRequest) {
        Product product = Product
                .builder()
                .name(productRequest.getName())
                .description(productRequest.getDescription())
                .price(productRequest.getPrice())
                .build();

        productRepository.save(product);
        log.info( "Product is saved {} ", product);
    }

    public List<ProductResponse> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream().map(this::mapToProductResponse).toList();
    }

    public ProductResponse mapToProductResponse ( Product product) {
        return ProductResponse
                .builder()
                .id( product.getId())
                .name( product.getName())
                .description( product.getDescription())
                .price( product.getPrice())
                .build();
    }
}

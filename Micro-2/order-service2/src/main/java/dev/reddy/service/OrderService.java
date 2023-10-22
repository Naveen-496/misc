package dev.reddy.service;

import dev.reddy.dto.InventoryRequest;
import dev.reddy.dto.InventoryResponse;
import dev.reddy.dto.OrderItemsDto;
import dev.reddy.dto.OrderRequest;
import dev.reddy.model.Order;
import dev.reddy.model.OrderItems;
import dev.reddy.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final WebClient.Builder inventoryWebClientBuilder;


    public List<Order> findAll() {
        try {
            return orderRepository.findAll();
        } catch (Exception e) {
            log.error("ERROR : {}", e.getMessage());
            return null;
        }
    }

    public void insert(OrderRequest orderRequest) {
        try {
            // call inventory service to check for the stock of the products

            // extract the skuCodes
            List<String> skuCodes = orderRequest.getOrderItemsDtos()
                    .stream()
                    .map(OrderItemsDto::getSkuCode)
                    .toList();
            log.info("These are the skuCodes from request {} ", skuCodes);


            WebClient webClient = inventoryWebClientBuilder.build();
            InventoryResponse[] inventoryResponse = webClient.get()
                    .uri("http://localhost:8080/api/inventory/isInStock",
                            uriBuilder -> uriBuilder
                                    .queryParam("skuCodes", skuCodes).build()
                    )
                    .retrieve()
                    .bodyToMono(InventoryResponse[].class)
                    .block();

            log.info("response from inventory {} ", inventoryResponse);

            List<InventoryResponse> nonStock =
                    Arrays.stream(inventoryResponse)
                            .filter(response -> !response.getIsInStock())
                            .toList();

            if (nonStock.isEmpty()) {
                log.info("Congrats! all items are in the stock");
                List<OrderItems> orderItems = this.mapToOrderItemsList(orderRequest.getOrderItemsDtos());
                Order order = Order
                        .builder()
                        .orderNumber(UUID.randomUUID().toString())
                        .orderItems(orderItems)
                        .build();
                orderRepository.save(order);

                // order has been placed now update the inventory
                List<InventoryRequest> inventoryRequests = orderItems
                        .stream()
                        .map( orderItem -> InventoryRequest
                                .builder()
                                .skuCode( orderItem.getSkuCode())
                                .quantity( orderItem.getQuantity())
                                .build())
                        .collect(Collectors.toList()
                        );

                log.info("Order has successfully placed now updating the inventory");
                webClient.post()
                        .uri( "http://localhost:8080/api/inventory/update")
                        .contentType( MediaType.APPLICATION_JSON)
                        .accept( MediaType.APPLICATION_JSON)
                        .retrieve()
                        .toBodilessEntity()
                        .block();

                log.info("Inventory updated successfully");

            } else {
                log.info("Some of the items {}  are not in stock currently ", nonStock);
                throw new RuntimeException("some items are not in stock currently pls try after some time");
            }

            // TODO: after saving the orders once again call the inventory-service
            //         to reduce the quantity of the podducts


        } catch (Exception e) {
            log.error("ERROR : {}", e.getMessage());
        }
    }

    private List<OrderItems> mapToOrderItemsList(List<OrderItemsDto> orderItemsDtos) {
        return orderItemsDtos
                .stream()
                .map(this::mapToOrderItem)
                .toList();
    }

    private OrderItems mapToOrderItem(OrderItemsDto orderItemsDto) {
        return OrderItems
                .builder()
                .skuCode(orderItemsDto.getSkuCode())
                .quantity(orderItemsDto.getQuantity())
                .price(orderItemsDto.getPrice())
                .build();
    }
}

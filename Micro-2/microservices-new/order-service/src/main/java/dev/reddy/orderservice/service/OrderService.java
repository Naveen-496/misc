package dev.reddy.orderservice.service;

import dev.reddy.orderservice.dto.InventoryResponse;
import dev.reddy.orderservice.dto.OrderLineItemsDto;
import dev.reddy.orderservice.dto.OrderRequest;
import dev.reddy.orderservice.event.OrderPlacedEvent;
import dev.reddy.orderservice.model.Order;
import dev.reddy.orderservice.model.OrderLineItems;
import dev.reddy.orderservice.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final WebClient.Builder webClientBuilder;
    private final KafkaTemplate<String, String> kafkaTemplate;

    public String placeOrder(OrderRequest orderRequest) {
        Order order = Order
                .builder()
                .orderNumber(UUID.randomUUID().toString())
                .orderLineItems(orderRequest
                        .getOrderLineItemsDtos()
                        .stream()
                        .map(this::mapToOrderLineItem)
                        .toList())
                .build();

        List<String> skuCodes = order.getOrderLineItems()
                .stream()
                .map(OrderLineItems::getSkuCode)
                .toList();

        InventoryResponse[] inventoryResponseArray = (webClientBuilder.build().get()
                .uri("http://inventory-service/api/inventory",
                        uriBuilder -> uriBuilder
                                .queryParam("skuCodes", skuCodes)
                                .build())
                .retrieve()
                .bodyToMono( InventoryResponse[].class)
                .block());


        boolean allInStock =  Arrays.stream(inventoryResponseArray)
                .allMatch(InventoryResponse::isInStock);
            if (allInStock) {
                orderRepository.save( order);
                kafkaTemplate.send("notificationTopic", "Notification received");
                return "Order placed successfully";
            } else {
                throw new RuntimeException("Not in the Stock");
            }


    }

    private OrderLineItems mapToOrderLineItem(OrderLineItemsDto orderLineItemsDto) {
        return OrderLineItems
                .builder()
                .skuCode(orderLineItemsDto.getSkuCode())
                .price(orderLineItemsDto.getPrice())
                .quantity(orderLineItemsDto.getQuantity())
                .build();
    }

}

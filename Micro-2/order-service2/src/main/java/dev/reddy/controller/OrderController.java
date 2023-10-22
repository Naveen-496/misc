package dev.reddy.controller;

import dev.reddy.dto.OrderRequest;
import dev.reddy.model.Order;
import dev.reddy.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @GetMapping("/")
    @ResponseStatus( HttpStatus.OK)
    public String helloOrder() {
        return "Hello from order-service";
    }

    @PostMapping("/")
    @ResponseStatus( HttpStatus.CREATED)
    public void createOrder(@RequestBody OrderRequest orderRequest) {
         orderService.insert( orderRequest );
    }

    @GetMapping
    public List<Order> findAll() {
        return orderService.findAll();
    }

}

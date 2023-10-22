package dev.reddy.inventoryservice2.controller;

import dev.reddy.inventoryservice2.dto.InventoryRequest;
import dev.reddy.inventoryservice2.dto.InventoryResponse;
import dev.reddy.inventoryservice2.model.Inventory;
import dev.reddy.inventoryservice2.service.InventoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/inventory")
@Slf4j
public class InventoryController {

    private final InventoryService inventoryService;

    @PostMapping("/create")
    @ResponseStatus( HttpStatus.CREATED)
    public Inventory createInventory( @RequestBody Inventory inventory) {
        return inventoryService.createInventory( inventory );
    }

    @GetMapping
    @ResponseStatus( HttpStatus.OK)
    public String sayHello() {
        return "Hello from Inventory";
    }

    @GetMapping("/isInStock")
    @ResponseStatus( HttpStatus.OK)
    public List<InventoryResponse> isInStock(@RequestParam List<String> skuCodes) {

        log.info("Got the request with skuCodes - {} ", skuCodes);
        return inventoryService.isInStock( skuCodes );
    }

    @GetMapping("/all")
    public List<Inventory> findAll() {
        return inventoryService.findAll();
    }

    @PostMapping("/update")
    @ResponseStatus( HttpStatus.OK)
    public void updateInventories(@RequestBody List<InventoryRequest> inventoryRequests) {
          log.info("Got the request with the data : {} ", inventoryRequests);
           inventoryService.updateInventory( inventoryRequests );
           log.info("Done with the request ");
    }
}

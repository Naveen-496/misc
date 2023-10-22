package dev.reddy.inventoryservice.controller;

import dev.reddy.inventoryservice.dto.InventoryResponse;
import dev.reddy.inventoryservice.service.InventoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
@RequiredArgsConstructor
@Slf4j
public class InventoryController {

    private final InventoryService inventoryService;

    @GetMapping()
    @ResponseStatus( HttpStatus.OK)
    public List<InventoryResponse> isInStock(@RequestParam List<String> skuCodes) {
           log.info("got the request with skucodes {} ", skuCodes);
            return inventoryService.isInStock( skuCodes );
    }


}

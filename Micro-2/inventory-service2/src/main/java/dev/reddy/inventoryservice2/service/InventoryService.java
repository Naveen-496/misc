package dev.reddy.inventoryservice2.service;

import dev.reddy.inventoryservice2.dto.InventoryRequest;
import dev.reddy.inventoryservice2.dto.InventoryResponse;
import dev.reddy.inventoryservice2.model.Inventory;
import dev.reddy.inventoryservice2.repository.InventoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class InventoryService {

    private final InventoryRepository repository;

    private List<Inventory> getInventoriesBySkuCodes(List<String> skuCodes) {
        List<Inventory> responses = repository.findBySkuCodeIn(skuCodes);
        return responses;
    }

    @Transactional(readOnly = true)
    @SneakyThrows
    public List<InventoryResponse> isInStock(List<String> skuCodes) {
        try {

            List<InventoryResponse> responses = this.getInventoriesBySkuCodes(skuCodes)
                    .stream()
                    .map(this::mapToInventoryResponse)
                    .toList();
            log.info("These are the inventories from the skuCodes {} ", responses);

            return responses;

        } catch (Exception e) {
            log.error("Error {} ", e.getMessage());
            return null;
        }

    }

    private InventoryResponse mapToInventoryResponse(Inventory inventory) {
        return InventoryResponse
                .builder()
                .skuCode(inventory.getSkuCode())
                .isInStock(inventory.getQuantity() > 0)
                .build();
    }

    public Inventory createInventory(Inventory inventoryData) {

        try {
            Inventory inventory;
            // find the inventory with the skuCode
            Optional<Inventory> optionalInventory = repository.findBySkuCode(inventoryData.getSkuCode());
            if (optionalInventory.isPresent()) {
                inventory = optionalInventory.get();
                log.info("There is an existing inventory - {}  with this skuCode {} with a quantity of {} ", inventory, inventoryData.getSkuCode(), inventory.getQuantity());
                // adding specified  quantity to it
                inventory.setQuantity(inventory.getQuantity() + inventory.getQuantity());
                return repository.save(inventory);

            }
            log.info("there is no existing inventory with this name creating one");
            inventory = Inventory
                    .builder()
                    .skuCode(inventoryData.getSkuCode())
                    .quantity(inventoryData.getQuantity())
                    .build();
            return repository.save(inventory);
        } catch (Exception e) {
            log.error("ERROR : {} ", e.getMessage());
            return null;
        }

    }

    public void updateInventory(List<InventoryRequest> inventoryRequests) {

        inventoryRequests.forEach(inventoryRequest -> {
            repository
                    .findBySkuCode(inventoryRequest.getSkuCode())
                    .ifPresent(
                            inventory1 -> {
                                inventory1
                                        .setQuantity(inventory1.getQuantity() - inventoryRequest.getQuantity());
                                repository.save(inventory1);
                            }
                    );
        });

    }

    public List<Inventory> findAll() {
        return repository.findAll();
    }
}

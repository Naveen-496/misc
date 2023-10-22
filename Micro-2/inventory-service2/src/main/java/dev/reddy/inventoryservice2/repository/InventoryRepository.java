package dev.reddy.inventoryservice2.repository;

import dev.reddy.inventoryservice2.model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {

    // if only one is required based on skuCode
    Optional<Inventory> findBySkuCode( String skuCode);
    List<Inventory> findBySkuCodeIn( List<String> skuCodes);


}

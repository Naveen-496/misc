package dev.reddy.kafkaconsumer.deserialize;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.reddy.kafkaconsumer.dto.Customer;
import org.apache.kafka.common.errors.SerializationException;
import org.apache.kafka.common.serialization.Deserializer;
import org.apache.kafka.common.serialization.Serializer;
import org.springframework.kafka.support.serializer.DeserializationException;

import java.util.Map;

public class CustomerDeserializer implements Deserializer<Customer> {

    private final ObjectMapper objectMapper = new ObjectMapper();


    @Override
    public void configure(Map<String, ?> configs, boolean isKey) {

    }

    @Override
    public Customer deserialize(String s, byte[] data) {
        try {
               if ( data == null ) {
                   System.out.println("Null received to deserialize");
                   return null;
               }
            System.out.println("Deserializing...");
               return objectMapper.readValue( new String( data, "UTF-8"), Customer.class);
        } catch ( Exception e) {
              throw new SerializationException("Error deserializing byte[] to customer");
        }
    }

    @Override
    public void close() {

    }
}

package dev.reddy.securitydemistified;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ApiService {

    private final RestTemplate restTemplate;

    @Autowired
    public ApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public void makeApiRequest() {
        String username = "yourUsername";
        String password = "yourPassword";
        String apiUrl = "https://commerce.zoho.com/store/api/v1/products";

        HttpHeaders headers = new HttpHeaders();
        headers.setBasicAuth(username, password);

        ResponseEntity<String> response = restTemplate.exchange(apiUrl, HttpMethod.GET, null, String.class);
        String responseBody = response.getBody();
        System.out.println(responseBody);
    }
}


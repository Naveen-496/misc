package dev.reddy.contentservice.config;

import dev.reddy.contentservice.service.ArticleClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.support.WebClientAdapter;
import org.springframework.web.service.invoker.HttpServiceProxyFactory;

@Configuration
public class ClientConfig {

    // @Configuration means the methods in this class are goind to produce
    // the beans which the spring container should take care of

    @Bean
    ArticleClient articleClient () {
        WebClient articleClient = WebClient
                .builder()
                .baseUrl("http://localhost:8081/api/")
                .build();

        HttpServiceProxyFactory factory = HttpServiceProxyFactory.builder(WebClientAdapter.forClient(articleClient)).build();
        return factory.createClient(ArticleClient.class);
    }
}

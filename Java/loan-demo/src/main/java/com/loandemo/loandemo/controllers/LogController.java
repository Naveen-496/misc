package com.loandemo.loandemo.controllers;

import com.loandemo.loandemo.Domain.Loan;
import com.loandemo.loandemo.response.JsonResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/log")
public class LogController {

    Logger log = LoggerFactory.getLogger( LogController.class );
    @GetMapping("/hello")
    public JsonResponse hello(@RequestParam String message) {

        try {
             log.info("Message received : {} ", message);
             return JsonResponse.getSuccessResponse( new Loan());
        } catch ( Exception e ) {
            log.error(e.getMessage(), e);
            return JsonResponse.getFailureResponse( e.getMessage() );
        }
    }
}

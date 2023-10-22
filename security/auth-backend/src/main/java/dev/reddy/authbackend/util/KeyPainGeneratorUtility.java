package dev.reddy.authbackend.util;

import lombok.extern.slf4j.Slf4j;

import java.security.KeyPair;
import java.security.KeyPairGenerator;

@Slf4j
public class KeyPainGeneratorUtility {

    public static KeyPair generateRsaKeyPair() {

        KeyPair keyPair;

        try {
            KeyPairGenerator generator = KeyPairGenerator.getInstance("RSA");
            generator.initialize(2048);
            keyPair = generator.generateKeyPair();
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            return null;
        }

        return keyPair;
    }
}

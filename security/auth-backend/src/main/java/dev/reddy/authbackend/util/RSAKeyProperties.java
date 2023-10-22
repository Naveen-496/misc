package dev.reddy.authbackend.util;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.security.KeyPair;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;

@Component
@Data
public class RSAKeyProperties {

    private RSAPrivateKey privateKey;
    private RSAPublicKey publicKey;

    public RSAKeyProperties() {
        KeyPair keyPair =   KeyPainGeneratorUtility.generateRsaKeyPair();
        this.privateKey = ( RSAPrivateKey) keyPair.getPrivate();
        this.publicKey = ( RSAPublicKey) keyPair.getPublic();
    }
}

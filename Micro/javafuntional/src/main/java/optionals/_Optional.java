package optionals;

import java.util.Optional;

public class _Optional {

    public static void main(String[] args) {
        Optional.ofNullable( "john@gmail.com" )
                .ifPresentOrElse(
                        email -> System.out.println( " sending message to "+ email),
                        () -> System.out.println("cannot send the message as the email is null"));
    }
}
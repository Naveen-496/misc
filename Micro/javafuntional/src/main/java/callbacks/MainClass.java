package callbacks;

import java.util.function.Consumer;

public class MainClass {

    public static void main(String[] args) {
       printName("John", null, lastNameError);
        printName("Naveen", null, value -> {
            System.out.println("No lastName provided for " + value );
        });
    }

    static Consumer<String> lastNameError =
            value -> System.out.println("No lastName provided for " + value);
    static void printName (String firstName, String lastName, Consumer<String> callback) {
        System.out.println( firstName );
        if( lastName != null ) {
            System.out.println( lastName );
        } else {
            callback.accept( firstName );
        }
    }
}

package lambdas;

import java.util.function.Function;

public class MainClass {

    public static void main(String[] args) {



        Function<String , String > upperCaseName = name -> {
            // logic
            if( name.isBlank()) throw new IllegalArgumentException("name is blank");
            return name.toUpperCase();
        };

        System.out.println( upperCaseName.apply(""));

    }
}

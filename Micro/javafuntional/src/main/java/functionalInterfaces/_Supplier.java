package functionalInterfaces;

import java.util.List;
import java.util.function.Supplier;

public class _Supplier {

    public static void main(String[] args) {
        System.out.println( getDBConnectionUrl());

        System.out.println("with using Suppliers");
        System.out.println( getDBConnectionUrlSupplier.get());

        System.out.println( "with using list of string supplier ");
        System.out.println( getDBConnectionUrlsSupplier.get());
    }

    static String getDBConnectionUrl () {
         return "jdbc://localhost:2200/users";
    }

    static Supplier<String> getDBConnectionUrlSupplier =
            () -> "jdbc://localhost:5064/users";

    static Supplier<List<String >> getDBConnectionUrlsSupplier =
            () -> List.of( "jdbc://localhost:6677/users", "jdbc://localhost:9909/customer");
}

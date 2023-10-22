package functionalInterfaces;

import java.util.function.BiConsumer;
import java.util.function.Consumer;

public class _Consumer {

    public static void main(String[] args) {

        // Consumer represents an operation that takes single input argument and
        // returns no

        Customer c1 = new Customer( "Amith", "6545497977");
        Customer julia = new Customer("Julia", "988888800");
        customerConsumer.accept( c1 );
        customerConsumer.accept( julia);
        greetCustomerAndThenModifyPhoneNumber.accept( new Customer("Maria", "899878787"));
        greetAndShowPhoneNumber.accept( new Customer( "Shanthi", "877908988"), false);
    }

    static Consumer<Customer> customerConsumer = customer -> System.out.println( "Hello! " + customer.customerName +
            " thanks for registering your phone number " + customer.customerPhoneNumber);

    //             OR
    static Consumer<Customer> customerConsumer2 = _Consumer::greetCustomer;

    static Consumer<Customer> AndThenAdd91 = customer -> System.out.println(
                    " and " +
                    " your phone number has been modified to " +
                    "+91" + customer.customerPhoneNumber
    );

    static Consumer<Customer> greetCustomerAndThenModifyPhoneNumber = customerConsumer.andThen( AndThenAdd91);

    static BiConsumer<Customer, Boolean> greetAndShowPhoneNumber =
            ( customer, showPhoneNumber) -> System.out.println(
                    "Hello! " + customer.customerName +
                            " thanks for registering your phone number " +
                            (showPhoneNumber ? customer.customerPhoneNumber : "*****")
            );

    static void greetCustomer( Customer customer ) {
        System.out.println( "Hello! " + customer.customerName +
                " thanks for registering your phone number " + customer.customerPhoneNumber);
    }

    static class Customer {

         private final String customerName;
         private final String customerPhoneNumber;

        public Customer(String customerName, String customerPhoneNumber) {
            this.customerName = customerName;
            this.customerPhoneNumber = customerPhoneNumber;
        }

        @Override
        public String toString() {
            return "Customer{" +
                    "customerName='" + customerName + '\'' +
                    ", customerPhoneNumber='" + customerPhoneNumber + '\'' +
                    '}';
        }
    }
}

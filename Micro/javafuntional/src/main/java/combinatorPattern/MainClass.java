package combinatorPattern;

import java.time.LocalDate;
import static combinatorPattern.CustomerRegistrationValidator.*;

public class MainClass {

    public static void main(String[] args) {

        Customer customer1 =
                new Customer("Alice",
                        "alice@gmail.com",
                        "9123434333",
                        LocalDate.of(2015, 1, 1));


//        CustomerValidatorService validatorService = new CustomerValidatorService();
//        System.out.println( validatorService.isValidCustomer( customer1 ));

       ValidationResult result =
                        isEmailValid()
                       .and( isPhoneNumberValid())
                       .and( isAnAdult)
                       .apply( customer1);

        System.out.println( result );
    }
}

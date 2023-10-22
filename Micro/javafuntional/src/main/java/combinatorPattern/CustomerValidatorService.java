package combinatorPattern;

import java.time.LocalDate;
import java.time.Period;

public class CustomerValidatorService {

    private boolean isEmailValid( String email ) {
        return email.contains("@");
    }
    private boolean isPhoneNumberValid( String phoneNumber ) {
        return phoneNumber.startsWith("91");
    }
    private boolean isDobValid(LocalDate dob) {
        return Period.between( dob , LocalDate.now()).getYears() > 16;
    }

    public boolean isValidCustomer( Customer customer) {
        return  isEmailValid(customer.email()) &&
                isPhoneNumberValid(customer.phoneNumber()) &&
                 isDobValid( customer.dob());
    }

}

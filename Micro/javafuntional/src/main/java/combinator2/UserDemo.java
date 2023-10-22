package combinator2;

import java.time.LocalDate;

import static combinator2.UserRegistrationValidator.*;

public class UserDemo {
    public static void main(String[] args) {
        User user =
                new User("Naveen",
                        "naveen@gmail.com",
                        "91234778688",
                        LocalDate.of(2016, 1, 1));

        UserRegistrationValidator userValidator =
                isEmailValid()
                        .and(isPhoneNumberValid())
                        .and(isValidName())
                        .and(isAnAdult());

        UserValidationResult result = userValidator.apply(user);
        System.out.println(result);
    }
}

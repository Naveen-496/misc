package combinator2;

import java.time.LocalDate;
import java.time.Period;
import java.util.function.Function;
import static combinator2.UserRegistrationValidator.UserValidationResult;
import static combinator2.UserRegistrationValidator.UserValidationResult.*;

public interface UserRegistrationValidator extends Function<User, UserValidationResult> {


    static UserRegistrationValidator isEmailValid() {
        return ( user ) ->
                (user.getEmail().contains("@") && user.getEmail().contains(".com")) ? SUCCESS
                : EMAIL_NOT_VALID;
    }

    static UserRegistrationValidator isPhoneNumberValid() {
        return ( user ) ->
            ( user.getPhoneNumber().contains("91") && user.getPhoneNumber().length() >= 10)
            ? SUCCESS : PHONE_NUMBER_NOT_VALID;

    }

    static UserRegistrationValidator isAnAdult() {
        return ( user ) ->
                Period.between( user.getDob() , LocalDate.now()).getYears() > 18
                ? SUCCESS : IS_NOT_AN_ADULT;
    }

    static UserRegistrationValidator isValidName() {
        return ( user ) ->
                user.getName().length() >= 5 ? SUCCESS : NAME_NOT_VALID;
    }

    default UserRegistrationValidator and ( UserRegistrationValidator other) {
        return ( user ) -> {
            UserValidationResult result = this.apply( user );
            return result.equals( SUCCESS ) ? other.apply( user ) : result;
        };
    }

    enum UserValidationResult {
        SUCCESS,
        PHONE_NUMBER_NOT_VALID,
        NAME_NOT_VALID,
        EMAIL_NOT_VALID,
        IS_NOT_AN_ADULT

    }
}

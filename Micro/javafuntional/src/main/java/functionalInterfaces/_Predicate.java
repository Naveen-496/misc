package functionalInterfaces;

import java.util.function.BiPredicate;
import java.util.function.Predicate;

public class _Predicate {

    public static void main(String[] args) {
        System.out.println("Normal method");
        System.out.println( isPhoneNumberValid( "916859404868"));
        System.out.println( isPhoneNumberValid( "968594048685"));
        System.out.println( isPhoneNumberValid( "9168594048"));

        System.out.println("By using Predicate");
        System.out.println( predicatePhoneNumber.test( "916859404868" ));
        System.out.println( predicatePhoneNumber.test( "968594048685" ));
        System.out.println( predicatePhoneNumber.test( "9185940486"));

        System.out.println("Using two predicates ");
        System.out.println( predicatePhoneNumber.and( hasNumber3).test( "912456666959"));
        System.out.println( predicatePhoneNumber.and( hasNumber3).test( "912356666959"));
        System.out.println( predicatePhoneNumber.and( hasNumber3).test( "2356666959"));


        System.out.println("Using Bi Predicates");
        System.out.println( startsWith91AndEndsWith0.test( "91858983849", false));
        System.out.println( startsWith91AndEndsWith0.test( "91858983849", true));
    }

    static boolean isPhoneNumberValid( String phoneNumber ) {
        return phoneNumber.startsWith("91") && phoneNumber.length() == 12;
    }

    static Predicate<String > predicatePhoneNumber =
            phoneNumber -> phoneNumber.startsWith("91") && phoneNumber.length() == 12;

    static Predicate<String> hasNumber3 = phoneNumber -> phoneNumber.contains("3");

    static BiPredicate<String , Boolean> startsWith91AndEndsWith0 =
            (phoneNumber, shouldContain0 ) -> phoneNumber.startsWith("91") && (!shouldContain0 || phoneNumber.endsWith("0"));
}

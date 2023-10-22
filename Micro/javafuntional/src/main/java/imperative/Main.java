package imperative;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class Main {

    public static void main(String[] args) {
        List<Person> people = List.of(
                new Person("John", Gender.MALE),
                new Person("Jasmine", Gender.FEMALE),
                new Person("Alex", Gender.MALE),
                new Person("Alice", Gender.FEMALE),
                new Person("Bob", Gender.MALE)
        );

        // Imperative Approach --> describing step by step in detail of what the program or
        // method does to the person reading the code as well as to the executor.
        // for example below in the imperative approach we are describing step by step
        // that create a separate list of person for females
        // use foreach loop and compare the gender of each person and if it is equal
        // then add that to the list

        //        OR

        // imperative programming is a paradigm in programming describing
        // HOW the program should do something by specifying each instruction
        // step by step, which mutates the program's state

        System.out.println("// Imperative Approach");
        List<Person> females = new ArrayList<>();
        for (Person person : people) {
            if (Gender.FEMALE.equals(person.gender)) {
                females.add(person);
            }
        }

        for (Person female : females) {
            System.out.println(female);
        }

        // declarative programming is a programming paradigm which focuses on
        // describing WHAT the program does, without specifying it's control flow
        System.out.println("// Declarative Approach");
        Predicate<Person> personPredicate = person -> Gender.FEMALE.equals( person.gender ) && person.name.equals("Alice");
        people.stream()
                .filter( personPredicate )
                .toList()
                .forEach(System.out::println);
    }

    enum Gender {
        MALE, FEMALE, OTHERS
    }

    static class Person {
        private final String name;
        private final Gender gender;

        public Person(String name, Gender gender) {
            this.name = name;
            this.gender = gender;
        }

        @Override
        public String toString() {
            return "Person{" +
                    "name='" + name + '\'' +
                    ", gender=" + gender +
                    '}';
        }
    }


}

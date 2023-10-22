package com.reddyscode.examples;

import com.reddyscode.beans.Person;
import com.reddyscode.mockdata.MockData;
import org.junit.jupiter.api.Test;

import java.util.List;

public class TestMockData {
    @Test
    void testPersonsData() {

        try {
            List<Person> people = MockData.getPersons();
            people.forEach( person -> System.out.println( person.getFirstName()));
        } catch (Exception e) {

        }

    }
}

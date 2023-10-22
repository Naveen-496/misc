package com.reddyscode.mockdata;

import com.google.common.io.Resources;
import com.google.common.reflect.TypeToken;
import com.google.gson.Gson;
import com.reddyscode.beans.Car;
import com.reddyscode.beans.Dog;
import com.reddyscode.beans.Person;
import org.apache.commons.io.IOUtils;

import java.io.InputStream;
import java.lang.reflect.Type;
import java.lang.reflect.TypeVariable;
import java.nio.charset.StandardCharsets;
import java.util.List;

public class MockData {

    public static List<Person> getPersons() throws Exception{
        //
        InputStream inputStream = Resources.getResource("persons.json").openStream();
        String json = IOUtils.toString( inputStream, StandardCharsets.UTF_8);

        Type listType = new TypeToken<List<Person>>(){}.getType();

        return new Gson().fromJson( json, listType);
    }

    public static List<Car> getCars() throws Exception{
        InputStream inputStream = Resources.getResource("cars.json").openStream();
        String json = IOUtils.toString( inputStream, StandardCharsets.UTF_8);

        Type listType = new TypeToken<List<Car>>(){}.getType();
        return new Gson().fromJson( json, listType);
    }

    public static List<Dog> getDogs() {
        try {
            InputStream inputStream = Resources.getResource("dogs.json").openStream();
            String json = IOUtils.toString(inputStream, StandardCharsets.UTF_8);

            Type dogListType = new TypeToken<List<Dog>>() {
            }.getType();

            return new Gson().fromJson(json, dogListType);
        } catch (Exception e) {
               return null;
        }
    }
}

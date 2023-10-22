
import random


class Hat:

    houses = ["Gryffindor", "Hogwarts",
              "Mansion", "Ravenclaw", "Slytherin"]

    @classmethod
    def sort(cls, name):
        print(f"{name} is in : ", random.choice(cls.houses))


name = input("Name: ")
Hat.sort(name)

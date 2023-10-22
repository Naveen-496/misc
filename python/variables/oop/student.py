class Student:
    def __init__(self, name, house) -> None:
        self.name = name
        self.house = house

    def __str__(self) -> str:
        return f"{self.name} from {self.house}"

    @classmethod
    def get(cls):
        while True:
            name = input("Name: ")
            house = input("House: ")
            try:
                return cls(name, house)
            except ValueError as ve:
                print("Error : ", ve)



    @property
    def house(self):
        return self._house

    @property
    def name(self):
        return self._name

    @house.setter
    def house(self, house):
        if house not in ["Gryffindor", "Raven", "Hogwarts"]:
            raise ValueError("Invalid House")
        self._house = house

    @name.setter
    def name(self, name):
        if not name:
            raise ValueError("Missing Name")
        self._name = name


def main():
    student = Student.get()
   # student.house = "Privet, House"
    print(student)
    num = int(10)


if __name__ == "__main__":
    main()

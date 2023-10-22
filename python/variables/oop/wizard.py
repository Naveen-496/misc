
class Wizard:
    def __init__(self, name) -> None:
        self.name = name


class Student(Wizard):
    def __init__(self, name, house) -> None:
        super().__init__(name)
        self.house = house


class Professor(Wizard):
    def __init__(self, name, subject) -> None:
        super().__init__(name)
        self.subject = subject


professor = Professor("Naveen", "Physics")
wizard = Wizard("Robo")
print(isinstance( professor, Wizard))
print( isinstance(wizard, Professor))
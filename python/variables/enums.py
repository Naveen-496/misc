from enum import Enum

class Color(Enum):
  RED = "red"
  GREEN = "green"
  BLUE = "blue"
  
color = Color ( input ( "Enter your favourite color : "))

match color:
  case Color.RED:
    print("I see red!")
  case Color.GREEN:
    print("I see green!")
  case Color.BLUE:
    print("I see blue!")
  case _:
    print("I'm not aware of that color yet!")        
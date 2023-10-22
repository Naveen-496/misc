
msg = "1.Addition\n2.Subtraction\n3.Multiplication\n4.Division\n5.Exit"
# print( msg )


def getInput():
    num1 = int(input("Enter you first number : "))
    num2 = int(input("Enter your second number : "))
    return [num1, num2]


def doAddition():
    nums = getInput()
    print("After adding ", nums[0], " and ",
          nums[1], " the sum is ", nums[0] + nums[1])


def doSubtraciton():
    nums = getInput()
    print("After subtracting ", nums[0], " and ",
          nums[1], " the result is ", nums[0] - nums[1])


def doMultiplication():
    nums = getInput()
    print("After multiplying ", nums[0], " and ",
          nums[1], " the result is ", nums[0] * nums[1])


def doDivision():
    nums = getInput()
    if (nums[1] == 0):
        raise ValueError("Denominator cannot be zero")
    else:
        print("After dividing ", nums[0], " and ",
              nums[1], " the result is ", nums[0] / nums[1])


def start():
    print("Welcome to Simple Calculator")
    stop = False
    while stop == False:
        print("Please choose from the following options")
        print("-" * 30)
        print(msg)

        choice = int( input())
        match choice:
            case 1:
                doAddition()
            case 2:
                doSubtraciton()
            case 3:
                doMultiplication()
            case 4:
                doDivision()
            case 5:
                print("Thank you, Have a nice day!")
                stop = True
            case _:
                print("Sorry you have chosen the wrong option")
                
        print("-" * 30)        


start()

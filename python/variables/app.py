# name = 'John Smith'
# age = 25

# print( name + " is " + str(age) + " years old")

name = input("What's your name ? ")
dob = input("Ok what's your date of birth ? ")
age = 2023 - int( dob )
print(name + " is " + str( age ) + " years old ")
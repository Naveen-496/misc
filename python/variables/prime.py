# print prime numbers upto given input

num = int( input("enter a number : "))

if num < 2:
  print("no prime numbers found")

for n in range(2, num + 1):
  for x in range(2, n):
    if n % x == 0:
      print(n, " equals ", x, "*", n // x)
      break
  else:  
    print(n, " is a prime number")


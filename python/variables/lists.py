# a = ["Mary", "had", "a", "little", "lamb"]
# print(range(1,len(a), 2))
# for i in range(1,len( a ), 2):
#   print(i, a[i])

fruits = ["apple", "banana", "kiwi", "mango", "banana", "grapes"]

# adds an item at the end of the list
fruits.append("guava")
print(fruits)

# returns the count of the given item in the list
print(fruits.count("banana"))

#returns the index of the given item in the list starting from the given index
print( fruits.index("banana", 3))

#adds the give list of items at the end of the lists
newFruits = ["dragonfruit", "orange"]
fruits.extend( newFruits )
print( fruits )

#sorts the list
fruits.sort()
print( fruits)

# reverses the list of items
fruits.reverse()
print( fruits )
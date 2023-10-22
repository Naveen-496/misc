
def contains_duplicate( nums ):
  for i in range( len(nums)):
    for j in range ( i + 1, len( nums )):
      if nums[i] == nums[j]:
        return True
      
  return False


def contains_duplicateSet( nums ):
  dups = set()
  for n in nums:
    if n in dups:
      return True
    dups.add( n )
    
  return False  

print(contains_duplicate([1, 2, 3, 4, 5, 1]))
print(contains_duplicateSet([1, 2, 3, 4, 5, 5]))
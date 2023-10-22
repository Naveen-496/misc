
from ast import List


def two_sum( nums, target: int) -> bool:
    
    for i in range( len(nums)):
      for j in range( i + 1, len(nums)):
        sum = nums[i] + nums[j]
        if sum == target:
          return True
        
    return False
  
  
print( two_sum([1, 3, 2, 5, 3], 10))      
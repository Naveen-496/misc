

def product_except_self( nums):
  
  result = []
  for i in range(len(nums)):
    num = 1
    for j in range(len(nums)):
      if i == j:
        continue
      else:
        num *= nums[j]
    result.append(num)
    
  return result


print( product_except_self([1, 2, 3, 4]))      
       
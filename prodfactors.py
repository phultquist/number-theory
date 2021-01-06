from fractions import gcd

M = 1000000007
  
# function to product the factors 
def multiplyFactors(n) : 
    prod = 1
      
    i = 1
    while i * i <= n : 
        if (n % i == 0) : 
              
            # If factors are equal, 
            # multiply only once 
            if (n / i == i) : 
                prod = (prod * i) % M 
                  
            #Otherwise multiply both 
            else : 
                prod = (prod * i) % M 
                prod = (prod * n / i) % M 
        i = i + 1
  
    return prod 
  
# Driver Code 
  


n = 2
m = 5
print(multiplyFactors(m)*multiplyFactors(n))
print(multiplyFactors(m*n))

quit()
print (multiplyFactors(n)) 
for i in range(2, 10):
    for j in range(2,10):
        if gcd(i,j) == 1:
            mi = multiplyFactors(i)
            mj = multiplyFactors(j)
            if (mi*mj != multiplyFactors(i*j)):
                print(i,j)
# This code is contributed by Nikita Tiwari. 
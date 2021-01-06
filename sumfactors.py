# Simple Python 3 program to
# find sum of all divisors of
# a natural number
import math


# Function to calculate sum
# of all divisors of given
# natural number
def divSum(n):
    if (n == 1):
        return 1
    numfactors = 0

    # Final result of summation
    # of divisors
    result = 0

    # find all divisors which
    # divides 'num'
    for i in range(2, (int)(math.sqrt(n)) + 1):

        # if 'i' is divisor of 'n'
        if (n % i == 0):
            # if both divisors are same
            numfactors += 1
            # then add it only once
            # else add both
            if (i == (n / i)):
                result = result + i
            else:
                numfactors += 1
                result = result + (i + n // i)

    # Add 1 and n to result as above
    # loop considers proper divisors
    # greater than 1.
    # print('t(n) ', numfactors + 2)
    # print('s(n) ', (result + n + 1))
    return (result + n + 1)


# Driver program to run the case
n = 238
# print()
# print("s(t) ",divSum(n))
# print("n    ", n)
# print()

for i in range(1, 45):
    j = 2*i + 1
    s = divSum(j*j)
    print(s)

quit()
for i in range(1,1000):
    s = divSum(i)
    if s % 2 == 1:
        print(i)
# This code is contributed by Nikita Tiwari.

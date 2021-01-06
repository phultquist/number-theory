import math

p=11
n = 7

for i in range(100):
    # if math.gcd(i,p) != 1:
    #     continue
    
    pbefore = ((i**((p-1)/2)) % p)
    pn = pbefore**n
    if pn == 1:
        print(pn)
        print((pn*pbefore) % p)
        print(pbefore, i)
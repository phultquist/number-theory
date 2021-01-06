from fractions import gcd

def congruent(a,b, mn):
    if (a%mn == b % mn):
        return True
    return False

for ind in range(60):
    i = ind**10
    if (congruent(i, 74, 650)):
        print(gcd(i, 650), i, ind)
        pass
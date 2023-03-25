def mini(a,b,c,d):
    return min(min(a, b), min(c, d))
n = list(map(int, input().split()))
a = n[0]
b = n[1]
c = n[2]
d = n[3]
print(mini(a,b,c,d))
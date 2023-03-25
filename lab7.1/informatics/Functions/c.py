def xor(x, y):
    if (x or y) and not (x and y): print(1)
    else: print(0)

n = list(map(float, input().split()))
a = n[0]
b = n[1]
xor(a, b)
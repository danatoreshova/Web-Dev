t = int(input())
sum = 0
for i in range(t):
    n = list(map(int, input().split())) 
    for i in n:
        sum+=i
print(sum)
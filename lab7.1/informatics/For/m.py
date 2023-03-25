t = int(input())
sum = 0
for i in range(t):
    n = list(map(int, input().split())) 
    for i in n:
        if 0 in n:
            sum+=1
print(sum)
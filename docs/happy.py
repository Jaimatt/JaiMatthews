import math

n = input("What is your number?")
print("")
Gn = n
M = [int(n)]
N = 0

while True:
    N=0
    i=0
    while i<len(n):
        N=N+(int(n[i])**2)
        i+=1
    #print(N)
    n=str(N)
    if 1 in M:
        print(M)
        print(str(Gn) + " is happy")
        break  
    if N in M:
        M.append(N)
        print(M)
        print(str(Gn) + " is sad")
        break
    M.append(N)
print("")
input("Press ENTER to close")

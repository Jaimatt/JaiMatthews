import math
print("BIOGRAPHICAL SEQUENCES")
print("--------")
print("")

n=input("Starting Number:")
print("Press Enter to generate each iterations")
input("")
it=1
print(n)
print("(iteration 0)")
while True:
    input("")
    #print(n)
    n = str(n)
    N=[]
    i=0
    while i<len(n):
        if n[i]!=" ":
            N.append(n[i])
        i+=1
    #print(N)
    n=""
    i=0
    N.append("A")
    while i<(len(N)-1):
        j=0
        X=0
        while N[i]==N[i+X]:
            j+=1
            X+=1
        n=n+str(j)+str(N[i])+" "
        #print(str(j)+str(N[i]))
        i+=j
    print(n)
    print("(iteration "+str(it)+", "+str(int((len(n))/3))+" pair[s])")
    #if "4" in str(n):
        #print("I found 4!")
        #break
    it+=1

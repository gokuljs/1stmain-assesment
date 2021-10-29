# final=[25,25,50]
# final=[25,100]
# final=[25,50,25,100]
final=[25,25,50,50,100]
bal=[]
n=len(final)
for i in range(n):
    bal.append(final[i]-25)
sum1=25*n
print(final)
print(bal)
print(sum1)
print(sum(bal))
if sum1>=sum(bal):
    print("Yes")
else:
    print("No")


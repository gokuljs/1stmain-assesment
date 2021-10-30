def solve(final):
    # keeping track of 25 50 and 100 bills 
    a25=0
    a50=0
    a100=0
    for i in final:
    # 25 
    # generally checking the value is 25 
    # then increment the count value 25count value by 1
        if i==25:
            a25=a25+1
        if i==50: # when you get a 50 dollar u decerement the value of 25 and increment value of 50 by 1
            a25=a25-1
            a50=a50+1
        if i==100:
            if(a50==0 and a25>3):
                a25=a25-3
            else:
                a25=a25-1
                a50=a50-1
            if a25<0 or a50<0:
                return "NO"
    return "YES"
        
    
        
        


    # 50 can return 50 and 25 

    # 100 can return 50 and 25

    # 100 can return 3*25

    #not possible 


final=[[25,25,50],[25,100],[25,25,50,50,100],[25,50,25,100]]

# final=[25,100]
# final=[25,25,50,50,100]
for i in final:
    print(i,"=",solve(i))




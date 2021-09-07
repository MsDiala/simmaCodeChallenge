# simmaCodeChallenge

## QUESTION ONE:
You're at a friend’s wedding, who seems to be a cheap friend! Anyway, there are 200 attendees and he only has 200 JDs in his pocket. 

The groom asks you to:

i. Every single attendee needs to get an item, and you should buy at least a single item from every single item on the menu.

ii. And not to spend more than 200 JDs.

Menu : 

Item 1:  Fizzy drinks .......................... 0.2 JDs

Item 2:  Boston Creme Donut ........... 2 JDs

Item 3:  500g Angus Beef Burger ... 10 JDs

How many items will you end up buying from item 3 (The Beef Burger)?

>> Solution :
x : number of Fizzy drinks 
y : number of Boston Creme Donut 
z : number of 500g Angus Beef Burger

x+y+z = 200 >>equ1
0.2x+2y+10z <= 200 >> equ2

from equ1 : x = 200-y-z 
replace the value of x in the seconed equation to get : [0.2(200-y-z)+2y+10z=200]

simplify to get :
[1.8y+9.8z+40=200] >> equ3


from equ3 : y = (-49z+800)/9
 since  x = 200-y-z  >> x =200-(-49z+800)/9-z
simplify to get >> x = ((40z-800)/9)+200

so we get that :
x = ((40z-800)/9)+200
y = (-49z+800)/9

we must find a vlue for z that keeps the result for x and y integrs and also z must be an integers

so in x = ((40z-800)/9)+200
the result of 40z-800 must be a multiple of 9 
and the result for 40z-800)/9 must be negative and less than 200 

Also in y = (-49z+800)/9
-49z+800 must be devisable by 9 
and -49z must be less than 800 since the resukt must be positive 

z = 11
y = 29
x = 160



## QUESTION TWO:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get:

3, 5, 6 and 9 >>>

If we add them up, the sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

>> Solution :
declare a c ounter with initial value zero
check if the number is a multiple of 3 or 5 
if it is a multiple of 3 or 5 we are going to add it to the counter 
return the value of the counter 


function itemNumber(x,y,z){
    
if (x<=0 || y<=0 || z<=0){
    retutn ("x and y and z must be positive integrs greater than 0")
}
else if ((40*z-800)%9===0 && (-49*z+800)%9===0){
x = ((40*z-800)/9)+200
y = (-49*z+800)/9
z=z
}
return z ;
}
    


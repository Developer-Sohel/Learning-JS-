var javascript_Rating = 1;

if (javascript_Rating<=1) {  // condition true
    console.log("So i am learning javascript")
    
}
else{
    console.log("sorry")
}

var sscResult = 3.50
var hscResult = 4.00;

//&& means two conditions to be fulfilled Here are two conditions Not filled so no output.
if (sscResult>= 4.50 && hscResult>=4.00) {  
   console.log("Are you selected in CSE")  
}
//. That is, either of the two conditions must be fulfilled. Here a condition is met so the output is shown

else if(sscResult<=4.50 || hscResult<=3.50){ 
    console.log("There is a possibility")
}



else{
    console.log("Sorry you can try another depertment") 
}
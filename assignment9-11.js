/////////////////////////////////CITY NAME ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var city= prompt("Enter Your City Name");
alert("Welcome  to The City"+" "+city);



/////////////////////////////////Male And Female ////////////////////////////////////////////////////////////////////////////////////////////////////////
var gender= prompt("Enter Your Gender ");
if(gender==="male"){
    alert("Good Morning Sir")
}

else {
    alert("Good Morning Maam ");
}

/////////////////////////////////Signal Color /////////////////////////////////////////////////////////////////////////////////////////////////////////////
var color= prompt("Enter Signal Color ");
if(color==="red"){
    alert("Must Stop")
}

else  if(color=='yellow'){
    alert("ready to move");

}

else {
    alert("Move now");
}

/////////////////////////////////Fuel Tanke Check /////////////////////////////////////////////////////////////////////////////////////////////////////////////

var fuelqunty= +prompt("Enter your Fuel quantity");
if(fuelqunty <= 0.25)
{
    alert("refuel your fuel tank");

}
else{
    alert("Dont need to refil tank");
}

/////////////////////////////////5 check estatement /////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
var a =4 ;
if( ++a === 5){
 alert("Give condition for variable is true");
}

var b= 82;
if(b++ == 83){
    alert("Given condition for variable b is true");
}

var c= 12;
if(c++ == 13){
    alert("Given condition 1 is true");
}


if(c == 13){
    alert("Given condition 2 is true");
}


if(++c < 14){
    alert("Given condition 3 is true");
}

if(c === 14){
    alert("Given condition 4 is true");
}


var materialcost=20000;
var labourcost=2000;
var totalcost=materialcost+labourcost;
if(materialcost+labourcost===totalcost){
    alert("the total cost equal")
} // True


*/


/////////////////////////////////Percentage Grades and remarks/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var totalnum=300;
var marksobt= +prompt("Enter Your Marks Obtained");
var percentage= (marksobt/totalnum)*100;

 if(percentage >80  || percentage===80){
     document.write("<h1>Mark Sheet</h1>"+ " "+ "</br>"+"Total Marks"+" "+marksobt+"</br>"+"Percentage"+" "+percentage+"%"+"</br>"+"Grade"+" "+"A1"+'</br>'+"remark"+" "+"Excellent");

 }

  else if(percentage >70  || percentage===70){
    document.write("<h1>Mark Sheet</h1>"+ " "+ "</br>"+"Total Marks"+" "+marksobt+"</br>"+"Percentage"+" "+percentage+"%"+"</br>"+"Grade"+" "+"A"+'</br>'+"remark"+" "+"Good");

}
 else if (percentage >60 || percentage===60){
    document.write("<h1>Mark Sheet</h1>"+ " "+ "</br>"+"Total Marks"+" "+marksobt+"</br>"+"Percentage"+" "+percentage+"%"+"</br>"+"Grade"+" "+"B"+'</br>'+"remark"+" "+"Need To improve");

}
else if (percentage >50  || percentage <= 50){
    document.write("<h1>Mark Sheet</h1>"+ " "+ "</br>"+"Total Marks"+" "+marksobt+"</br>"+"Percentage"+" "+percentage+"%"+"</br>"+"Grade"+" "+"fail"+'</br>'+"remark"+" "+"Fail");

}



/////////////////////////////////GUESS GAME/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var number= 5;
var guess= +prompt("Enter Guess Number");
if (guess === number){
    alert("Bingo ! Correct Number");
}

else if (guess ===4 || guess===6  ){
    alert("You are close enough");
}

else{
    alert ("Try again");

}

/////////////////////////////////Divisivle By 3/////////////////////////////////////////////////////////////////////////////////////////////////////////////
 var checknum = +prompt("Enter Number to check if it is divsible by 3");
 if( checknum%3 === 0) {
     alert("This number is divisilbe by 3");
 }

 else{
     alert("this number not divislble by 3");
 }


 /////////////////////////////////Check Even Or Odd/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var num= +prompt("Enter Number To Check Its Even Or Odd");
if(num%2 ==0){
    alert("he nubmer is even");
}

else{
    alert("the number is odd");
}

 /////////////////////////////////Temperature/////////////////////////////////////////////////////////////////////////////////////////////////////////////


 var temp = +prompt("Enter Temperature");
  if(temp > 40){
      alert("the weather is to hot")
  }

 else  if(temp > 30){
    alert("the weather is today normal");
}
else  if(temp > 20){
    alert("Today Weather is Cool");
}

else {
    alert("OMG ! Today weather is so cold");
}

 /////////////////////////////////Calculator/////////////////////////////////////////////////////////////////////////////////////////////////////////////

 var num1=+prompt("Enter First number");
 var num2=+prompt("Enter First number");
 var sign= prompt("Enter Action Apply");
 if(sign === "+"){
     var num3= num1+num2;
     alert(num3);
 }
 else if(sign === "-"){
    var num3= num1-num2;
    alert(num3);
}

else if(sign === "/"){
    var num3= num1/num2;
    alert(num3);
}


else if(sign === "*"){
    var num3= num1*num2;
    alert(num3);
}

else if(sign === "%"){
    var num3= num1%num2;
    alert(num3);
}








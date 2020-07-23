var a=10;
document.write("The value of a is :"+" "+a+"</br>");
a = ++a;
document.write("The value of ++a is :"+" "+a+"</br>");
document.write("now value of a is :"+" "+a+"</br>");
document.write("The value of a++ is :"+" "+a+"</br>");
var b=a++;
document.write("The value of ++a is :"+" "+a+"</br>");

var b=--a;
document.write("The value of --a is :"+" "+a+"</br>");

document.write("The value of a--is :"+" "+a+"</br>");
var c= a--;

document.write("The value of ais :"+" "+a+"</br>");



//////////////////////////////////////////MATH EXPRESSION///////////////////////////////////////////////////////////////////////////////////////////////////

///var a=2;
//var b=1;
//var result =--a - --b + ++b + b-- ;
//alert(result) ;

// --a;
 // --a - --b;
 //--a - --b + ++b;
// --a - --b + ++b +b--;
 

//////////////////////////////////////////Greet User///////////////////////////////////////////////////////////////////////////////////////////////////

var username= prompt("Enter username to greet");
alert("Welcome here"+" "+username);

//////////////////////////////////////////Markh Sheet///////////////////////////////////////////////////////////////////////////////////////////////////


var sub1=prompt("Enter name of first subject");
var sub2=prompt("Enter name of second subject");
var sub3=prompt("Enter name of third  subject");
var num1= +prompt("Enter number of first  subject");
var num2= +prompt("Enter number of second subject");
var num3= +prompt("Enter number of third  subject");
var total=300;
var obt=num1+num2+num3;
var percentage=(obt/total)*100;
document.write("<h1>Marksheet </h1>"+"</br>"+"<table>"+
"<tr><th>Sub</th><th>Total</th><th>Marks obtained</th><th>Percentage</th></tr>"+"</br>"+
"<tr><td>"+Sub1+"</td><td>"+100+"</td><td>"+num1+"</td><td>"+(num1/100)*100+"</td></tr>"+"</br>"+
"<tr><td>"+Sub2+"</td><td>"+100+"</td><td>"+num2+"</td><td>"+(num2/100)*100+"</td></tr>"+"</br>"+
"<tr><td>"+Sub3+"</td><td>"+100+"</td><td>"+num3+"</td><td>"+(num3/100)*100+"</td></tr>"+"</br>"
+"</table>");
/////////////////////////////ADDITION //////////////////////////////////////////////////////
var num1= +prompt("Enter First Number To Add");
var num2= +prompt("Enter Second Number To Add");
var num3= num1+num2 ;
 +document.write("The sum of"+" "+num1+" " + "and " +" "+ num2 +" number is " + num3+ "</br>");


/////////////////////////////SUBTRACTION //////////////////////////////////////////////////////


var num4= +prompt("Enter First Number To Subtract");
var num5= +prompt("Enter Second Number To Subtract");
var num6= num4-num5  ;
document.write(" The subtraction of"+" "+num4+" " + "and " +" "+ num5 +" number is " + num6+"</br>");



/////////////////////////////DIVISON//////////////////////////////////////////////////////

var num7= +prompt("Enter First Number To Divion");
var num8= +prompt("Enter Second Number To Divisoin");
var num9= num7/num8  ;
document.write(  "The Division of"+" "+num7+" " + "and " +" "+ num8 +" number is " + num9+"</br>");


/////////////////////////////Multiplication//////////////////////////////////////////////////////

var num10= +prompt("Enter First Number To Multiplication");
var num11= +prompt("Enter Second Number To Multiplication");
var num12= num10*num11  ;
document.write(  "The Multiplication of"+" "+num10+" " + "and " +" "+ num11 +" number is " + num12 +"</br>");
 

/////////////////////////////Modulus//////////////////////////////////////////////////////


var num13= +prompt("Enter First Number To Modulus");
var num14= +prompt("Enter Second Number To Modulus");
var num15= num13%num14 ;
document.write(  "The Modulus of"+" "+num13+" " + "and " +" "+ num14 +" number is " + num15+"</br>");



var value ;
document.write("Value after variable declaration is"+" +'value" +"</br>");
value=5;
document.write("“Initial value:"+ " "+value+"</br>");
value= ++value;
document.write("Value after increment is: "+" "+value+"</br>");
var newval= value+7;
document.write("the value after increment and addition is "+ " "+newval+"</br>");
newval= --newval;
document.write("Value after decrement is:" +" "+newval+"</br>");
var remainder=newval%4;
document.write("the remainder is "+" " +remainder+"</br>");




///////////////////////////////////////////////MovieTicket //////////////////////////////////////////////////////////////////////////////////////////////////////
var moiveTicket=600;
var quantity= +prompt("Enter the quantity of tickets");
var total= moiveTicket*quantity;
document.write("The ticekt price is "+" "+moiveTicket+"qunatity is "+" "+quantity+"the total is "+total+"PKr"+"</br>");


/////////////////////////////////////////////TABle///////////////////////////////////////////////////////////////////////////////////////

var numer= +prompt("Enter any nubmer to print table");
var n1=1;
var n2=2;
var n3=3;
var n4=4;
var n5=5;
var n6=6;
var n7=7;
var n8=8;
var n9=9;
var n10=10;
document.write("Table of  "+numer);
document.write(numer +" "+"x"+" " +n1+" "+"="+numer*n1+"</br>" );
document.write(numer +" "+"x"+" " +n2+" "+"="+numer*n2+"</br>" );
document.write(numer +" "+"x"+" " +n3+" "+"="+numer*n3+"</br>" );
document.write(numer +" "+"x"+" " +n4+" "+"="+numer*n4+"</br>" );
document.write(numer +" "+"x"+" " +n5+" "+"="+numer*n5+"</br>" );
document.write(numer +" "+"x"+" " +n6+" "+"="+numer*n6+"</br>" );
document.write(numer +" "+"x"+" " +n7+" "+"="+numer*n7+"</br>" );
document.write(numer +" "+"x"+" " +n8+" "+"="+numer*n8+"</br>" );
document.write(numer +" "+"x"+" " +n9+" "+"="+numer*n9+"</br>" );
document.write(numer +" "+"x"+" " +n10+" "+"="+numer*n10+"</br>" );


//////////////////////////////////////////Temeperature conversion////////////////////////////////////////
var tempC= +prompt("Enter Temperature in Celcius");
var tempF= +prompt("Enter Temperature in Farhenite");
var f=(tempC*9/5)+32;
var c=(tempF-32)*5/9;
document.write("temperature in Celsius"+tempC +"to farhenite is "+" "+f+"</br>");
document.write("temperature in farhenite"+tempF +"to celsius  is "+" "+c+"</br>");


////////////////////////////////////////////Shopping Cart/////////////////////////////////////////////
var price1= +prompt("enter price of first item");
var qunatity1= +prompt("enter quantity of first item");
var price2= +prompt("enter price of seocnd item");
var qunatity2= +prompt("enter quantity of second item");
document.write( "<h1> Shopping Cart </h1>"+"</br>" +"the price of first item is "+" "+price1+"</br>");
document.write("the qunaity of first item is "+" "+qunatity1+"</br>");
document.write("the price of second item is "+" "+price2+"</br>");
document.write("the quantity of first item is "+" "+qunatity2+"</br>");
var shipchr=100;
var totalcost=price1*qunatity1+price2*qunatity2+shipchr;
document.write("total cost of your order is "+" " +totalcost+"</br>");


////////////////////////////////////////MARKSHEET/////////////////////////////////////////////////////////////
var totalmark=980;
var markobt=804;
var perc= (totalmark/markobt)*100
document.write("<h1>Mark Sheet </h1>"+"Total marks"+totalmark+"</br>"+"Marks Obtained"+markobt+"</br>"+"Percentage"+perc)

////////////////////////////////////////Curreny calculator/////////////////////////////////////////////////////////////
var dollar =104.80*10;
var riyal= 28*25;
var addcurreny=dollar+riyal;
document.write("<h1>Curreny in Pkr </h1>"+"</br>"+"the total conversion of dollar and riyal in Pkr is "+''+addcurreny+"</br>");


////////////////////////////////////////Expression/////////////////////////////////////////////////////////////

var anynum=10;
var chagnenum=(10+5)*(10/2);
document.write("the additon and division in single expression");



////////////////////////////////////////AGE Calculator/////////////////////////////////////////////////////////////
var birthyear= +prompt("Enter your birth year");
var currentyear= +prompt("Enter Current year");
var yourage= currentyear-birthyear;

document.write("<h1> Age calculator</h1>"+ "</br>"+"Birth Year"+" "+birthyear+"</br>"+"Current year"+" "+currentyear+"</br>"+"Your age"+" "+yourage+"</br>");

////////////////////////////////////////Geometrizer/////////////////////////////////////////////////////////////

var radius= +prompt("Enter Radius of Circle");
var cfc= 2*(3.142)*radius;
var ca = 3.142*(radius)^2;

document.write("<h1>Geometrizer </h1>"+ "</br>"+"radius of circle is "+" "+radius+"</br>"+"circumfernce of circle"+" "+cfc+"</br>"+"Area of circle"+ " "+ca+"</br>");


////////////////////////////////////////Supply/////////////////////////////////////////////////////////////


var snckprday=3;
var curage=15;
var estage=64;
var snack="Chocolate Chips";
var serving=(estage-curage)*snckprday;
document.wite("<h1>The Life Time Supply Calculator</h1>"+"</br>");
document.wite("Fravourite Snack" +" "+ snack+"</br>");
document.wite("current Ae" +" "+ curage+"</br>");
document.wite("Estimated Age" +" "+ estage+"</br>");
document.wite("life time serving" +" "+ serving+"</br>");
document.wite("You Will need+"+serving+"choclate chip too  last you until the ripe old age of"+" "+estage);

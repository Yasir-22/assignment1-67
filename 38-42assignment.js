//////////////////////////////////////////////////////////////////////////1//////////////////////////////////////////////////////////////////////////////////////////////


// <!-- 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b. -->

function power(a,b){
    var c=Math.pow(a,b);
    return c;
}

var a=power(2,3);
document.write("the 2 power 3 is"+a);


//////////////////////////////////////////////////////////////////////////2//////////////////////////////////////////////////////////////////////////////////////////////

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...

function leapyear(){
    var year=+prompt("Enter any year to check its leap year or not");
    var answere;
    if((year % 4==0 && year !==0) || year % 400==0){
        document.write("<br>"+year+"is leap year");
    }
    else {
        document.write("<br>"+year+"is not leap year");
    }

}
leapyear();



//////////////////////////////////////////////////////////////////////////3//////////////////////////////////////////////////////////////////////////////////////////////

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
var side1=+prompt("Enter first side of triangle");
var side2=+prompt("Enter second side of triangle");
var side3=+prompt("Enter third side of triangle");
function side(side1,side2,side3) {
  var s=(side1+side2+side3)/2;
  return s;
}
var slide=side(side1,side2,side3);
function area(side1,side2,side3) {
 var area =slide*(slide-side1)*(slide-side2)*(slide-side3);
 return area;
}
var fullarea=area(side1,side2,side3);
document.write("<br>"+"There area of traingle is "+fullarea,slide);
//////////////////////////////////////////////////////////////////////////4//////////////////////////////////////////////////////////////////////////////////////////////


// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

function main() {
    var math=80;
    var eng=60;
    var sci=80;
    function avg(math,eng,sci){
        var average=(math+eng+sci)/3;
        return average;
    }
    var average =avg(math,eng,sci);
    function per(math,eng,sci){
        var percentage=((math+eng+sci)/300)*100;
        return percentage.toFixed(2);
    }

    var percentage=per(math,eng,sci);
    document.write("<br>"+"The average is"+average+"<br>"+"the percentage is"+percentage);


}
main();



//////////////////////////////////////////////////////////////////////////5//////////////////////////////////////////////////////////////////////////////////////////////


// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now

function indexOf(str,queryStr){
    for(var i=0; i < str.length;i++){
        for(var j=0;j< queryStr.length;j++){
            if(str[i+j]!== queryStr[j]){
                break;
            }
            if(j === queryStr.length -1){
              return i;
            }

        }

   }
   return -1 ;
}
var show=indexOf('hello world!','w');
document.write('the index of w is '+show);



//////////////////////////////////////////////////////////////////////////6//////////////////////////////////////////////////////////////////////////////////////////////


// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

function delvowel(str){
    var vowels=['a','e','i','o','u'];
    return str.split('').filter(function (el)
    {
        return vowel.indexOf(el.toLowerCase())== -1;

    }).join('');
}
var dil=delvowel("hello Yasir");
document.write("<br>"+dil);



//////////////////////////////////////////////////////////////////////////9//////////////////////////////////////////////////////////////////////////////////////////////



// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.


//////////////////////////////////////////////////////////////////////////10//////////////////////////////////////////////////////////////////////////////////////////////


// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.


function currencynote(){
    var amount=+prompt("enter amount of withdrawn");
    var hundered=Math.floor(amount/100);
    var fifty=Math.floor((amount%100)/50);
    var ten=Math.floor((amount%100%50)/10);
    var remaining=Math.floor(((amount%100)%50)%10);
    document.write("<br>"+"You will have"+hundered+"hundered notes"+"you have"+fifty+"fifty notes"+"you have"+ten+"ten notes");
    
}
currencynote();










//////////////////////////////////////////////////////////////////////////8//////////////////////////////////////////////////////////////////////////////////////////////

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

function cal(){
     var distance= +prompt("enter the distance in KM");
     function meter(){
      var  meter=distance*1000;
         return meter;
     }
     function feet(){
        var  feet=distance*3280.84;
        return feet;
    }
    function inches(){
        var  inch=distance*39370.1;
        return inch;
    }

    function centimeter(){
        var  ctmeter=distance*1000;
        return ctmeter;
    }
    document.write("<br>"+"the distance in meter is "+ meter() +"<br>");
    document.write("the distance in  feet is "+ feet() + "<br>");
    document.write("the distance in inches is "+ inches() +"<br>");
    document.write("the distance in centimeter is "+ centimeter() +"<br>");
}
cal();


////////////////////////////////////////////////Check Capital or smaller Alphabet///////////////////////////////////////////////////////////////////////
var chrc = prompt("enter character to check it is smaller or capital Alphabet");
if( Number(chrc)){
    alert("Its Number");
}
 else if( chrc>='a' && chrc<='z')
 {
    alert("this is Smallet Alphabet");
}

else if ( chrc>='A' && chrc<='Z')
{
   alert("this is Capital Alphabet");
}

else {
    alert("check you chrc")
}



////////////////////////////////////////////////two number checm ethier which one is grater of two ////////////////////////////////////////////////////////////////////////////


var num1 = +prompt("enter  first    number  ");
var num2 = +prompt("enter  second   number  ");
if (num2 > num1 ){
    alert( num2+" "+"is greater than"+" "+num1);
}
else {
    alert( num1+" "+"is greater than"+" "+num2);

}

////////////////////////////////////////////////Check nubmer is positive or nergative or 0 ////////////////////////////////////////////////////////////////////////////
var input = +prompt("enter number to check postive negativ or 0");
if(input >0){
    alert("it is positive number");
}
 else if(input <0){
    alert("it is negative number");
}

else {
    alert("number is 0");
}
////////////////////////////////////////////////Vowel or not //////////////////////////////////////////////////////////////////////////////////////////////////////

var vowel=prompt("Enter Alphabet to check Vowel or not");
if(vowel==='a' || vowel==='e' || vowel==='i' || vowel==='o' || vowel==='o'  ){
   alert("it is Vowel");    

}
else {
    alert("its not Vowel ");
}

////////////////////////////////////////////////Check password //////////////////////////////////////////////////////////////////////////////////////////////////////

var pss= prompt("Enter password");
var psd='yasirmoiz'
if (pss === ""|| pss===null)alert(" Please enter password ");
if( pss===psd) alert("password is correct");
else  alert("Password is incorrect");



////////////////////////IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION////////////////////////////////////////////////////////////////////////////////////////////////
var time=+prompt("Enter time");
if(time>=0 && time<12){
    alert("good morning");
}
 else if(time>=12 &&time <22){
    alert("good evening");
}
else if(time>=22 && time <=24){
    alert("good night");
}


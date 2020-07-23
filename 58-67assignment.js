// Get element of id “main-content” and assign them in a variable.
var content=document.getElementById('main-content');
// Display all child elements of “main-content” element.

var childs=content.childNodes.length;
console.log(childs);


// Get all elements of class “render” and show their innerHTML
// in browser.


var rendr=document.getElementsByClassName('render');
var para=document.getElementById('para');
rendr.innerHTML=para.innerHTML;

// iv. Fill input value whose element id first-name using javascript.


function first(){
var firstname=document.getElementById('first-name');
firstname.nodeValue="yasir";
}
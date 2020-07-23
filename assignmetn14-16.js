var literalnotatiob= [];
var objectnotation={};
var arry=["karachi","hyderabad"];
var num=[1,2,3,4,5,6,7];
var bolean=[true,false];
var mixedarry=["karachi",1,true]; 
var edu=["SSC","HSC","BS",'BSC',"BCOME","MS",'MSC',"M.PHIL",'PHD'];
document.write( "<h1>Education</h1>");

for (var i=0 ;i<=7;i++) {
   document.write(i+1+" "+edu[i]+"</br>")
}

//////////////////////////////////////studnet Data////////////////////////////////////////////////////////////////////////////////////////////////////////////

var student=['Yasir',"Basit","Ali"];
var score=[320,230,480];
var totalmark=500;
var per1=(score[0]/500)*100;
var per2=(score[1]/500)*100;
var per3=(score[2]/500)*100;
document.write("Score of "+student[0]+ "is" +" "+score[0]+" "+"And percentage is"+  per1 + "</br>"+
"Score of "+student[1]+ "is" +" "+score[1]+" "+"And percentage is"+  per2+ "</br>"+"Score of "+student[2]+ "is" +" "+score[2]+" "+"And percentage is"+ per3 + "</br>")


/////////////////////////////////////////////AND AND REMOVE/////////////////////////////////////////////////////////////////////////////////////////////////////////////4
 var color=["red","yellow","blue","pink"];
 var begging=prompt("enter colour you want to add in start");
 color.unshift(begging);
  alert(color);
  var last=prompt("enter colour you want to add in last");
  color.push(last);
  alert(color);
  color.unshift('black','grey');
  alert(color);
  color.pop();
  alert(color);
  var update=prompt("at which index you want to add coclor");
  var clr=prompt("which color you want to add");
  color.splice(update,0,clr);
  alert(color);
  var indx=prompt("at which index you want ot delete color");
  var delclr=prompt("how many color u want to delete");
  color.splice(indx,delclr);
  alert(color);



  ////////////////////////////////////////////////////////////////SCore///////////////////////////////////////////////////////////////////////////////////////
  var scr=[320,230,480,120];
  document.write("<h1>Number</h1>"+"</br>"+"Score of stdent"+" "+scr+" "+"</br>");
  scr.sort();
  document.write("Scrore in order"+" "+scr+"</br>");


  ////////////////////////////////////////////////////////////////FIFO////////////////////////////////////////////////////////////////////////////////////////
  document.write("<h1>Devices</h1>");
  var dev=["keyboard","mouse","printer","monitor"];
  document.write(dev);
  for(i=0;i<=3;i++){
      document.write("</br>"+"out"+"</br>"+dev[i])
  }
 
  document.write("<h1>Devices</h1>");
  var devi=["keyboard","mouse","printer","monitor"];
  document.write(devi);
  for(var j=3;j>=0;j--){
  document.write("</br>"+"out"+"</br>"+devi[j]);
  }

////////////////////////////////////////////////////////////////Mobile Brand////////////////////////////////////////////////////////////////////////////////////////
"</br>"
"</br>"
"</br>"

var cellbrand=["samsung","motorolla","lg","appl"];
document.write("cellbrand");
document.write("</br>"
+"<select>"+
"<option>"+cellbrand[0]+"</option>"+"</br>"+
"<option>"+cellbrand[1]+"</option>"+"</br>"+
"<option>"+cellbrand[2]+"</option>"+"</br>"+
"<option>"+cellbrand[3]+"</option>"+"</br>"+
"</select>")
function showdetail(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var number=document.getElementById('number').value;
    var city=document.getElementById('city').value;
    var p1=document.getElementById("p1");
      p1.innerHTML=name;
      var p2=document.getElementById("p2");
      p2.innerHTML=email;
      var p3=document.getElementById("p3");
      p3.innerHTML=number;
      var p4=document.getElementById("p4");
      p4.innerHTML=city;
      
}


function read(){
  var text="One of the basic pieces of furniture, a chair is a type of seat. Its primary features are two pieces of a durable material, attached as back and seat to one another at a 90° or slightly greater angle, with usually the four corners of the horizontal seat attached in turn to four legs—or other parts of the seat's underside attached to three legs or to a shaft about which a four-arm turnstile on rollers can turn—strong enough to support the weight of a person who sits on the seat (usually wide and broad enough to hold the lower body from the buttocks almost to the knees) and leans against the vertical back (usually high and wide enough to support the back to the shoulder blades). The legs are typically high enough for the seated person's thighs and knees to form a 90° or lesser angle.[1][2] Used in a number of rooms in homes (e.g. in living rooms, dining rooms, and dens), in schools and offices (with desks), and in various other workplaces, chairs may be made of wood, metal, or synthetic materials, and either the seat alone or the entire chair may be padded or upholstered in various colors and fabrics."
  var read=document.getElementById('red');
  read.innerHTML=text;


}



function detail(){
  var name1=document.getElementById('name1');
  var class1=document.getElementById('class1');
  var age1=document.getElementById('age1');
  var sec1=document.getElementById('sec');
   var t1=document.getElementById('tr1');
   var t2=document.getElementById('tr2');
   var t3=document.getElementById('tr3');
   var t4=document.getElementById('tr4');
   name1.value=t1.innerHTML;
   class1.innerHTML=t2.innerHTML;
   age1.innerHTML=t3.innerHTML;
   sec1.innerHTML=t4.innerHTML;


}




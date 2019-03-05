/*AFISARE FORMULAR*/
function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("ch");
  // Get the output text
var f=document.getElementsByTagName("form");
    f[0].style.display="inherit";

   
}

/*MESAJ NEWSLETTER*/
function click_sub() {
   alert("Multumim pentru abonarea la Newsletter!");
}

/*SCHIMBARE SECTIUNE*/
function meniu(element){
    var a1=document.getElementById("cover1");
    var a2=document.getElementById("cover2");
    var a3=document.getElementById("cover3");
    
    var id=element.id;
    
    if(id==1)
        {   a1.classList.remove("hidden");
            a2.classList.add("hidden");
            a3.classList.add("hidden");
        }
    
    if(id==2)
        {   a2.classList.remove("hidden");
            a1.classList.add("hidden");
            a3.classList.add("hidden");
        }
    
    if(id==3)
        {   a3.classList.remove("hidden");
            a1.classList.add("hidden");
            a2.classList.add("hidden");
        }
    
    
}


function hov_h1_in(event)
{
    event.target.style.background="#bf8b86";
    event.stopPropagation();
}

function hov_h1_out(event)
{
    event.target.style.background="#d7c2c0";
    event.stopPropagation();
    
}

function hov_div_in(elem)
{
    //var y=document.getElementById("cover1");
    elem.style.background="#c3d2d4";
}

function hov_div_out(elem)
{
     //var y=document.getElementById("cover1");
    elem.style.background="#5d5f70";
}



/*STOP PROPAGATION*//*
$(document).ready(function(){
  $("h1").hover(function(event){
    event.stopPropagation();
   
      var x=event.currentTarget;
      x.style.backgroundColor="#bf8b86";
     
  },function(event){
      event.stopPropagation();
   
      var x=event.currentTarget;
      x.style.backgroundColor="#d7c2c0";
  });
  $("div").hover(function(event){
      
       var x=event.currentTarget;
       x.style.backgroundColor="#c3d2d4";
      
  },function(event){
      
      var x=event.currentTarget;
      x.style.backgroundColor="#5d5f70";
  }
                );
 
});
*/







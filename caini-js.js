/*schimbare stil la hover */
function hoverIn ( element ){  element.style.background = "#e69895";
                     element.style.borderRadius="30px";
                            
                    };
function hoverOut ( element ){
                       element.style.background = "#ffdad9";       
                         element.style.borderRadius="10px";
                    };


localStorage.setItem("click","0");

function nrclick(elem){
var x = parseInt(localStorage.getItem("click"))+1;
    localStorage.setItem("click", x);
        
}







var i=1;

function generareimg(elem){  
       if(i<=8){nrclick(elem);
var divv=document.createElement('div');
       divv.style.paddingTop="20px";
           var p=i.toString();
       divv.style.backgroundImage="url('"+i+".jpg')";
           divv.style.backgroundSize="cover";
           divv.style.backgroundPosition="center";
       divv.style.width="15%";
           divv.style.height="25%";
    divv.style.marginBottom="2.5%";
           divv.style.marginRight="5%";
           divv.style.marginLeft="5%";
       divv.style.float="left";
       document.getElementById("imagini").appendChild(divv);
   
  i++;
           
   setTimeout(function(){
  divv.remove();
}, 10000);
    }
       
   }

setInterval(function(){x = parseInt(localStorage.getItem("click"));
    if(i>8 && x%8==0)
    {i=1; alert("Se pot genera imagini.");}
},20000);






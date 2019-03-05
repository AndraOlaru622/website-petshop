  
function addborder ( element){
   var elem = document.getElementById("section-img");
    var im=elem.getElementsByTagName("img");
    im[0].style.visibility="hidden";
    var h=document.getElementById("hclick");
    h.style.fontSize="1.5em";
    var home=document.getElementById("home");
    home.style.marginLeft="42%";
    home.style.marginTop="2%";
      var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("border");
    
    
    if(theCSSprop[0]=='0')
        {   
            elem.classList.add( "section-img-with-border" );
        }

    var y=document.getElementsByClassName("inf-offclick");
 
    y[0].classList.add("inf-onclick");
};


function addClass ( element ){  var x = event.target;
  
                        if(x.id=="left")
                        {element.classList.add( "class_hover" );
                     
                            var h=document.getElementsByTagName( "h2" )[1];
                     h.classList.add( "h2_hover" );}
                     
                     if(x.id=="middle")
                            {element.classList.add( "class_hover" );
                     
                            var h=document.getElementsByTagName( "h2" )[3];
                     h.classList.add( "h2_hover" );}
                     
                     if(x.id=="right")
                         {
                                {element.classList.add( "class_hover" );
                     
                            var h=document.getElementsByTagName( "h2" )[2];
                     h.classList.add( "h2_hover" );}
                         }
                    
                    };
                        

   function removeClass1 ( element ){  
                        
                        element.classList.remove( "class_hover" );
                    var h=document.getElementsByTagName( "h2" )[1];
                       h.classList.remove( "h2_hover" );
                        
                
                        
                        
                        
                        
                    };

   function removeClass2 ( element ){  
                        
                        element.classList.remove( "class_hover" );
                    var h=document.getElementsByTagName( "h2" )[2];
                       h.classList.remove( "h2_hover" );
                        
                
                        
                        
                        
                        
                    };

   function removeClass3 ( element ){  
                        
                        element.classList.remove( "class_hover" );
                    var h=document.getElementsByTagName( "h2" )[3];
                       h.classList.remove( "h2_hover" );
                        
                
                        
                        
                        
                        
                    };
                        
                        
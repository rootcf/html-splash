 /*  rootcf */
let rotate = 0;    
let splash = setInterval(function(){
 rotate += 30;
let c = document.getElementById("loading").style = "transform: rotate("+rotate+"deg);"

},50)
$(document).ready(function() {
    setTimeout(function(){
        
      
    rotate = 0;
  
        $('#splash').fadeOut(1000,function(){
            
          
            clearInterval(splash);
        });
        
     
    },1000);
 

 });


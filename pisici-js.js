
window.onload=function(){
var x = document.getElementById("home");
x.addEventListener("mouseover", backroundover);
    x.addEventListener("mouseout",backroundout);

}

function backroundover()
{
    var b=document.querySelector("#home");
    b.style.backgroundColor="#e8aeff";
}

function backroundout()
{
    var b=document.querySelector("#home");
    b.style.backgroundColor="#866491";
}

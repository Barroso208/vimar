let navbar = document.getElementById("navbar");
var navState = "";
var menuState = "cerrado";



function desplegarLista(){
    if(window.screen.width <= 620){
        if(menuState == "cerrado"){
            document.getElementsByClassName("listaLinks")[0].style.display = "flex";
            navbar.style.animationDirection = "normal";
            document.getElementsByClassName("listaLinks")[0].setAttribute("class","listaLinks latido");
            setTimeout(function(){document.getElementsByClassName("listaLinks")[0].setAttribute("class","listaLinks")},1000);
            menuState = "desplegado";
        }else{
            document.getElementsByClassName("listaLinks")[0].setAttribute("class","listaLinks");
            document.getElementsByClassName("listaLinks")[0].setAttribute("class","listaLinks latidoInverso");
            setTimeout(function(){document.getElementsByClassName("listaLinks")[0].style.display = "none"; console.log(document.getElementsByClassName("listaLinks")[0])},250);
            menuState = "cerrado";
        }
    }
}


window.addEventListener('scroll', function(e) {
    if(window.scrollY >= 500 && navState === ""){
        navbar.style.animationDirection = "normal";
        navbar.style.animationName = "small";
        navbar.style.height = "12vh";
        if(window.innerWidth < 620){
            document.getElementsByClassName("listaLinks")[0].style.top = "12vh";
        }
        navState = "small";
    }else if(window.scrollY <= 500 && navState === "small"){
        navbar.style.animationName = "normal";
        navbar.style.height = "15vh";
        if(window.innerWidth < 620){
            document.getElementsByClassName("listaLinks")[0].style.top = "15vh";
        }
        navState = "";
    }
});

let atribS =document.getElementById("spanAtribuciones");
let atribB =document.getElementById("atribucionesDiv");

function display(){
    if(atribB.style.display == "none"){
        atribB.style.display = "block";
    }else{
        atribB.style.display = "none";
    }
    
}
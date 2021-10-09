const galeriaDiv = document.getElementById("galeria"); 



function enlace(e){
    if (e.target.loading === "lazy"){
        location.href ="diseño.html"
    }
}

galeriaDiv.addEventListener("click",enlace);
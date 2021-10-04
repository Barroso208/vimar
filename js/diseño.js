const galeriaDiv = document.getElementById("galeria"); 



function enlace(e){
    if (e.target.loading === "lazy"){
        location.href ="cocinasVimar.html"
    }
}

galeriaDiv.addEventListener("click",enlace);
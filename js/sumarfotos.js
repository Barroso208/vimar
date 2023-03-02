const contenedorGaleria = document.getElementById("galeriaDiv");

function fotos(n){
    for(i = 1; i<n;i++){
        const article = document.createElement("article");
        article.className = "fotos";
        const img = document.createElement("img");
        img.src = "imagenes/imagenesOptimizadas/foto"+ i +".jpg";
        img.alt = "imagenOptimizada";
        img.loading = "lazy";
        article.appendChild(img);
        img.addEventListener("load", function() {
            contenedorGaleria.appendChild(article);
        });
        
    }
}

function numero(n){
    while(n%3 != 0){
        n = n+1;
    }
    console.log(n);
    fotos(n+1);
}

//CAMBIA ESTE NÚMERO AL NÚMERO DE FOTOS QUE TENGA LA CARPETA
numero(47);


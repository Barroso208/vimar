const contenedorGaleria = document.getElementById("galeriaDiv");
function fotos(n){
    for(i = 1; i<n;i++){
        const article = document.createElement("article");
        article.className = "fotos";
        const img = document.createElement("img");
        img.src = "imagenes/imagenesOptimizadas/foto"+ i +".JPG";
        img.alt = "imagenOptimizada";
        img.loading = "lazy";
        article.appendChild(img);
        if(i==45||i==46){
            console.log("hola");
        }else{
            contenedorGaleria.appendChild(article);
        }
    }
}
fotos(52);
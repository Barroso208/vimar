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
        contenedorGaleria.appendChild(article);
    }
}
fotos(52);
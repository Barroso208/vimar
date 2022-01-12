function fotos(nombreid,carpeta,n){
    const contenedorGaleria = nombreid;
    for(i = 1; i<n;i++){
        const article = document.createElement("article");
        article.className = "fotos"
        const link = document.createElement("a");
        link.href="imagenes/"+carpeta+"/foto"+ i +".JPG";
        article.className = "fotos";
        const img = document.createElement("img");
        img.src = "imagenes/"+carpeta+"/foto"+ i +".JPG";
        img.alt = "imagenOptimizada";
        img.loading = "lazy";
        link.appendChild(img);
        article.appendChild(link);
        contenedorGaleria.appendChild(article);
    }
}
fotos(banos,"imagenesOptimizadas",7);
fotos(cocinas,"imagenesOptimizadas",7);
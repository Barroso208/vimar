const banos = document.getElementById("banos");
const cocinas = document.getElementById("cocinas");
let b = 0;
let c = 0;
function fotos(tipo,nombreid,carpeta,n,s,t){
    const contenedorGaleria = nombreid;
    for(i = s; i<n;i++){
        if(i<t)
        {const article = document.createElement("article");
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
    }else{
        document.getElementById("boton"+tipo).style.display = "none";
    }
    }
    if (tipo == "cocina"){
        c = n;
    }
    if(tipo == "bano"){
        b = n;
    }
}
function cocina(){
    fotos("cocina",cocinas,"imagenesOptimizadas/cocinas/ordenadas",c+6,c,40);
}
function bano(){
    fotos("bano",banos,"imagenesOptimizadas/baños/ordenadas",b+6,b,16);
}
fotos("cocina",banos,"imagenesOptimizadas/baños/ordenadas",7,1,39);
fotos("bano",cocinas,"imagenesOptimizadas/cocinas/ordenadas",7,1,16);
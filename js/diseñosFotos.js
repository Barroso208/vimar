const banos = document.getElementById("banos");
const cocinas = document.getElementById("cocinas");
const showroom = document.getElementById("showroom");
let b = 0;
let c = 0;
let l = 0;
function fotos(tipo, nombreid, carpeta, n, s, t) {
    const contenedorGaleria = nombreid;
    for (i = s; i < n; i++) {
        if (i < t) {
            const article = document.createElement("article");
            article.className = "fotos"
            const link = document.createElement("a");
            link.href = "imagenes/" + carpeta + "/foto" + i + ".jpg";
            article.className = "fotos";
            const img = document.createElement("img");
            img.src = "imagenes/" + carpeta + "/foto" + i + ".jpg";
            img.alt = "imagenOptimizada";
            img.loading = "lazy";
            link.appendChild(img);
            article.appendChild(link);
            contenedorGaleria.appendChild(article);
        } else {
            document.getElementById("boton" + tipo).style.display = "none";
        }
    }
    if (tipo == "cocina") {
        c = n;
    }
    if (tipo == "bano") {
        b = n;
    }
    if (tipo == "showroom") {
        l = n;
    }
}
function cocina() {
    fotos("cocina", cocinas, "imagenesOptimizadas/Cocinas/ordenadas", c + 6, c, 35,);
}
function bano() {
    fotos("bano", banos, "imagenesOptimizadas/Baños/ordenadas", b + 6, b, 16);
}
function showroo() {
    fotos("showroom", showroom, "showroom/aShowroomOrdenada", l + 6, l, 16);
}
fotos("cocina", banos, "imagenesOptimizadas/Baños/ordenadas", 7, 1, 39);
fotos("bano", cocinas, "imagenesOptimizadas/Cocinas/ordenadas", 7, 1, 16);
fotos("showroom", showroom, "showroom/aShowroomOrdenadas", 7, 1, 16);

// Set the usernames and repository names for each gallery
const galleries = [
    { username: "Barroso208", repo: "vimar", path: "imagenes/imagenesOptimizadas/Banos" },
    { username: "Barroso208", repo: "vimar", path: "imagenes/imagenesOptimizadas/Cocinas" },
    { username: "Barroso208", repo: "vimar", path: "imagenes/showroomResized" }
];

// Get a list of all the files in each repository
Promise.all(
    galleries.map(gallery =>
        fetch(`https://api.github.com/repos/${gallery.username}/${gallery.repo}/contents/${gallery.path}`)
            .then(response => response.json())
            .then(files => files.filter(file => file.type === "file"))
            .then(files => files.map(file => file.download_url))
    )
).then(urlsArray => {

    //PARA LAS FOTOS DEL BAÑO
    displayImages(urlsArray[0].slice(0, 6), banos);

    document.getElementById("botonbano").addEventListener("click", () => {
        // Load and display the next 6 images
        const startIndex = banos.querySelectorAll("img").length;
        const endIndex = startIndex + 6;
        displayImages(urlsArray[0].slice(startIndex, endIndex), banos);
        //Check si se ha llegado al maximo de fotos y display none boton
        if (banos.querySelectorAll("img").length == urlsArray[0].length) {
            document.getElementById("botonbano").style.display = "none";
        }
    });

    //PARA LAS FOTOS DE LA COCINA
    displayImages(urlsArray[1].slice(0, 6), cocinas);

    document.getElementById("botoncocina").addEventListener("click", () => {
        // Load and display the next 6 images
        const startIndex = cocinas.querySelectorAll("img").length;
        const endIndex = startIndex + 6;
        displayImages(urlsArray[1].slice(startIndex, endIndex), cocinas);
        //Check si se ha llegado al maximo de fotos y display none boton
        if (cocinas.querySelectorAll("img").length == urlsArray[1].length) {
            document.getElementById("botoncocina").style.display = "none";
        }
    });

    //PARA LAS FOTOS DEL SHOWROOM
    displayImages(urlsArray[2].slice(0, 6), showroom);

    document.getElementById("botonshowroom").addEventListener("click", () => {
        // Load and display the next 6 images
        const startIndex = showroom.querySelectorAll("img").length;
        const endIndex = startIndex + 6;
        displayImages(urlsArray[2].slice(startIndex, endIndex), showroom);
        //Check si se ha llegado al maximo de fotos y display none boton
        if (showroom.querySelectorAll("img").length == urlsArray[2].length) {
            document.getElementById("botonshowroom").style.display = "none";
        }
    });

});

// Function to load and display images
function displayImages(urls, place) {
    urls.forEach(url => {
        const article = document.createElement("article");
        article.className = "fotos"
        const link = document.createElement("a");
        link.href = url;
        article.className = "fotos";
        const img = document.createElement("img");
        img.src = url;
        img.alt = "imagenOptimizada";
        img.loading = "lazy";
        link.appendChild(img);
        article.appendChild(link);
        place.appendChild(article);
    });
}






// Set the paths to the folders containing the images for each gallery
const imageFolders = [
    "imagenes/imagenesOptimizadas/Baños",
    "imagenes/imagenesOptimizadas/Cocinas",
    "imagenes/showroomResized"
];

// Get a list of all the files in each folder
Promise.all(
    imageFolders.map(folder =>
        fetch(folder)
            .then(response => response.text())
            .then(html => {
                // Parse the HTML to get a list of filenames
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                return Array.from(doc.querySelectorAll("a"))
                    .map(link => link.getAttribute("href"))
                    .filter(href => href.endsWith(".jpg") || href.endsWith(".JPG") || href.endsWith(".webp") || href.endsWith(".png"));
            })
    )
).then(filenamesArray => {

    //PARA LAS FOTOS DEL BAÑO
    displayImages(filenamesArray[0].slice(0, 6), banos);
    
    document.getElementById("botonbano").addEventListener("click", () => {
        // Load and display the next 6 images
        const startIndex = banos.querySelectorAll("img").length;
        const endIndex = startIndex + 6;
        displayImages(filenamesArray[0].slice(startIndex, endIndex),banos);
        //Check si se ha llegado al maximo de fotos y display none boton
        if (banos.querySelectorAll("img").length == filenamesArray[0].length) {
            document.getElementById("botonbano").style.display = "none";
        }
    });

    //PARA LAS FOTOS DE LA COCINA
    displayImages(filenamesArray[1].slice(0, 6), cocinas);

    document.getElementById("botoncocina").addEventListener("click", () => {
        // Load and display the next 6 images
        const startIndex = cocinas.querySelectorAll("img").length;
        const endIndex = startIndex + 6;
        displayImages(filenamesArray[1].slice(startIndex, endIndex),cocinas);
        //Check si se ha llegado al maximo de fotos y display none boton
        if (cocinas.querySelectorAll("img").length == filenamesArray[1].length) {
            document.getElementById("botoncocina").style.display = "none";
        }
    });

    //PARA LAS FOTOS DEL SHOWROOM
    displayImages(filenamesArray[2].slice(0, 6), showroom);

    document.getElementById("botonshowroom").addEventListener("click", () => {
        // Load and display the next 6 images
        const startIndex = showroom.querySelectorAll("img").length;
        const endIndex = startIndex + 6;
        displayImages(filenamesArray[2].slice(startIndex, endIndex),showroom);
        //Check si se ha llegado al maximo de fotos y display none boton
        if (showroom.querySelectorAll("img").length == filenamesArray[2].length) {
            document.getElementById("botonshowroom").style.display = "none";
        }
    });
});





// Function to load and display images
function displayImages(filenames, place) {
    filenames.forEach(filename => {
        const article = document.createElement("article");
        article.className = "fotos"
        const link = document.createElement("a");
        link.href = filename;
        article.className = "fotos";
        const img = document.createElement("img");
        img.src = filename;
        img.alt = "imagenOptimizada";
        img.loading = "lazy";
        link.appendChild(img);
        article.appendChild(link);
        place.appendChild(article);
    });
}

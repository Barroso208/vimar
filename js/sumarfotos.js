const contenedorGaleria = document.getElementById("galeriaDiv");

const imageFolder = "/imagenes/imagenesOptimizadas";
fetch(imageFolder)
    .then(response => response.text())
    .then(html => {
        // Parse the HTML to get a list of filenames
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const filenames = Array.from(doc.querySelectorAll("a"))
            .map(link => link.getAttribute("href"))
            .filter(href => href.endsWith(".jpg")||href.endsWith(".JPG")||href.endsWith(".png")||href.endsWith(".webp"));

        // Load each image and display it on the page
        filenames.forEach(filename => {
            const article = document.createElement("article");
            article.className = "fotos";
            const img = document.createElement("img");
            img.src = filename;
            img.alt = "imagenOptimizada";
            img.loading = "lazy";
            article.appendChild(img);
            img.addEventListener("load", function () {
            contenedorGaleria.appendChild(article);
            });
        });
    });

    
const contenedorGaleria = document.getElementById("galeriaDiv");




// Set the variables for the GitHub repository and folder to fetch images from,
// as well as the file extensions to consider as images.

const owner = "Barroso208";
const repo = "vimar";
const branch = "main";
const folder = "/imagenes/imagenesOptimizadas/imagenesGaleria";
const imageExtensions = ["jpg", "jpeg", "png", "gif","JPG","webp"];

// Fetch the contents of the specified folder in the repository using the GitHub REST API.
fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${folder}?ref=${branch}`)
    .then(response => response.json())
    .then(files => {
        // Filter out the files that do not have one of the specified image file extensions.
        const imageFiles = files.filter(file => {
            const extension = file.name.split(".").pop();
            return imageExtensions.includes(extension);
        });

        // Create a div element to contain the images and append it to the body of the page.

        // Create an HTML img element for each image file and append it to the images div.
        imageFiles.forEach(file => {
            const article = document.createElement("article");
            article.className = "fotos";
            const img = document.createElement("img");
            img.src = file.download_url;
            img.alt = "imagenOptimizada";
            img.loading = "lazy";
            article.appendChild(img);
            img.addEventListener("load", function () {
                contenedorGaleria.appendChild(article);
            });
        });
    })
    .catch(error => console.error(error));
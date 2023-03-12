const imgSlider = document.getElementById("imgSlider");
var num = 1;

function change() {
    imgSlider.style.opacity = 0;
    imgSlider.src = "imagenes/imagenesOptimizadas/imagenesPortada/" + imagenesSlider[num];
    opac();
    if(num == imagenesSlider.length-1){
        num = 0;
    }else{
        num++;
    }
}

function opac() {
    let opacity = 0;
    let id = null;
    clearInterval(id);
    id = setInterval(frame, 0.5);
    function frame() {
        if (opacity == 100) {
            clearInterval(id);
            /* transparent(); */
        } else {
            opacity++;
            imgSlider.style.opacity = opacity / 100;
        }
    }
}

setInterval(function () { change() }, 5000);

let imagenesSlider = []

const owner = "Barroso208";
const repo = "vimar";
const branch = "main";
const folder = "/imagenes/imagenesOptimizadas/imagenesPortada";
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
            imagenesSlider.push(file.name);
        });
    })
    .catch(error => console.error(error));

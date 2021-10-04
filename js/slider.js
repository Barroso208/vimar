let imagenes= ["imagenes/watermark-designs-XL6gfkLmkOw-unsplash.jpg","imagenes/sidekix-media-oCw5_evbWyI-unsplash(1).jpg","imagenes/roam-in-color-z3QZ6gjGRt4-unsplash.jpg"]
let imgSlider = document.getElementById("imgSlider");
var num = 1;

function change(){
    switch(num){
    case 1:
        imgSlider.src = imagenes[1];
        num++;
        break;
    case 2:
    imgSlider.src = imagenes[2];
        num++;
        break;
    case 3:
    imgSlider.src = imagenes[0];
        num = 1;
        break;
}
}
setInterval(function(){change()},2500);
let imagenes= ["imagenes/showroom/showRoomEdited8.jpg","imagenes/imagenesOptimizadas/foto1.JPG","imagenes/imagenesOptimizadas/Cocinas/IMG_5837.JPG","imagenes/imagenesOptimizadas/Cocinas/IMG_1685.JPG"]
const imgSlider = document.getElementById("imgSlider");
var num = 1;

function change(){
    switch(num){
    case 1:
        imgSlider.style.opacity = 0;
        imgSlider.src = imagenes[1];
        opac();
        num++;
        break;
    case 2:
        imgSlider.style.opacity = 0;
        imgSlider.src = imagenes[2];
        opac();
        num++;
        break;
    case 3:
        imgSlider.style.opacity = 0;
        imgSlider.src = imagenes[3];
        opac();
        num++;
        break;
    case 4:
        imgSlider.style.opacity = 0;
        imgSlider.src = imagenes[0];
        opac();
        num = 1;
        break;
}
}

function opac(){
    let opacity = 0;
    let id = null;
    clearInterval(id);
    id = setInterval(frame,0.5);
    function frame(){
        if(opacity == 100){
            clearInterval(id);
            /* transparent(); */
        }else{
            opacity++;
            imgSlider.style.opacity = opacity/100;
        }
    }
}

setInterval(function(){change()},5000);
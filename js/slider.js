let imagenes= ["imagenes/showroom/showroomEdited.jpg","imagenes/imagenesOptimizadas/foto1.JPG","imagenes/imagenesOptimizadas/cocinas/IMG_5837.JPG","imagenes/imagenesOptimizadas/cocinas/IMG_1685.JPG"]
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
    imgSlider.src = imagenes[3];
        num++;
        break;
    case 4:
    imgSlider.src = imagenes[0];
        num = 1;
        break;
}
}
setInterval(function(){change()},2500);
let indice = 1;
muestraSlides(indice);

avanzaSlide=(n)=>{
    muestraSlides( indice+=n );
}

posicionSlide=(n)=>{
    muestraSlides(indice=n);
}

setInterval(tiempo=()=>{
    muestraSlides(indice+=1)
},4000);

function muestraSlides(n){
    
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';

}
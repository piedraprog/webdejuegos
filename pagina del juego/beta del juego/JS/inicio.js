//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES

let InicioJuego = document.getElementById('botoninicio1');
let InicioJuego2 = document.getElementById('botoninicio2');
let InicioJuego3 = document.getElementById('botoninicio3');
let salir = document.getElementById('salir');

// VARIABLES DEL CANVAS
let canvas;
let ctx;




//LINEA DE TIEMPO//LINEA DE TIEMPO //LINEA DE TIEMPO //LINEA DE TIEMPO //LINEA DE TIEMPO  

let frame = window.requestAnimationFrame||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame||
            window.msRequestAnimationFrame;

let animacion;


//EVENTOS//EVENTOS //EVENTOS //EVENTOS //EVENTOS //EVENTOS //EVENTOS //EVENTOS //EVENTOS  


InicioJuego.addEventListener('click', (e)=>{
    
    e.preventDefault();
    
    
    document.querySelector("#pantallainicio").parentNode.removeChild(document.querySelector("#pantallainicio"));

    canvas = document.querySelector("#lienzo");
    ctx = canvas.getContext("2d");

    document.querySelector("#carga").style.display = "block";

    


    // NIVEL 1  // NIVEL 1 // NIVEL 1 // NIVEL 1 // NIVEL 1 // NIVEL 1 // NIVEL 1 // NIVEL 1

    datos.plano3 = new Image();
    datos.plano3.src = "IMG/nivel1/fondo3.jpg";

    
    datos.texturaPlataforma = new Image();
    datos.texturaPlataforma.src = "IMG/nivel1/texturaplata.jpg";

    datos.bloque = [
    {"x":0   , "y":334 , "ancho":66 , "alto":162},
	{"x":160 , "y":274 , "ancho":66 , "alto":222},
	{"x":227 , "y":290 , "ancho":66 , "alto":162},
	{"x":0   , "y":385 , "ancho":223 , "alto":111},
	{"x":160 , "y":352 , "ancho":223 , "alto":144},
	{"x":435 , "y":241 , "ancho":66 , "alto":255},
	{"x":522 , "y":346 , "ancho":67 , "alto":150},
	{"x":401 , "y":389 , "ancho":223 , "alto":107},
	{"x":589 , "y":261 , "ancho":200 , "alto":235},
	{"x":864 , "y":410 , "ancho":66 , "alto":86},
	{"x":921 , "y":383 , "ancho":66 , "alto":113},
	{"x":1078 , "y":353 , "ancho":173 , "alto":113},
	{"x":1251 , "y":353 , "ancho":173 , "alto":143},
	{"x":1518 , "y":353 , "ancho":79 , "alto":143},
	{"x":1690 , "y":353 , "ancho":117 , "alto":219},
	{"x":1807 , "y":277 , "ancho":160 , "alto":332},
	{"x":2065 , "y":304 , "ancho":160 , "alto":193},
	{"x":2320 , "y":251 , "ancho":225 , "alto":250},
	{"x":2280 , "y":360 , "ancho":155 , "alto":140},
	{"x":2690 , "y":-4 , "ancho":310 , "alto":156},
	{"x":2690 , "y":284 , "ancho":310 , "alto":212}]
    
    // plataforma LOGICA 

    datos.plataforma=[
    {"x":0   , "y":334  , "ancho":66 ,  "alto":12},
	{"x":160 , "y":274  , "ancho":68 ,  "alto":9},
	{"x":227 , "y":290  , "ancho":74 ,  "alto":11},
	{"x":0   , "y":385 , "ancho":160 ,  "alto":6},
	{"x":160 , "y":352  , "ancho":225 , "alto":10},
	{"x":435 , "y":241  , "ancho":71 ,  "alto":10},
	{"x":522 , "y":346  , "ancho":65 ,  "alto":9},
	{"x":401 , "y":389  , "ancho":200 , "alto":300},
	{"x":589 , "y":261  , "ancho":196 , "alto":300},
	{"x":864 , "y":410  , "ancho":66 ,  "alto":114.7},
	{"x":920 , "y":383  , "ancho":60 ,  "alto":130},
	{"x":1078 , "y":353  , "ancho":174 ,"alto":12},
	{"x":1251 , "y":353  , "ancho":177 ,"alto":11},
	{"x":1518 , "y":353  , "ancho":79 , "alto":11},
	{"x":1690 , "y":353  , "ancho":110 ,"alto":9},
	{"x":1807 , "y":281  , "ancho":159 ,"alto":220.4},
	{"x":2066 , "y":304  , "ancho":157 ,"alto":8},
	{"x":2065 , "y":304  , "ancho":86 , "alto":900},
	{"x":2280 , "y":360  , "ancho":180 ,"alto":1300},
	{"x":2325 , "y":250  , "ancho":218 ,"alto":1300},
	{"x":2690 , "y":284   , "ancho":310 ,"alto":212},
	{"x":2690 , "y":-4  , "ancho":311 , "alto":116}]
    
    
    // JUGADOR 

    datos.imgjugador= new Image();
    datos.imgjugador.src= "IMG/nivel1/jugador1.png";

    datos.imgjugador.onload = function(){

    }

    // PRELOAD

    let cargararchivos = [datos.plano3,datos.texturaPlataforma];
    let numeroarchivos = 0;
    let porcentaje = 0;

    for(let i=0; i<cargararchivos.length;i++){

        cargararchivos[i].addEventListener("load", precargar)
    }

    function precargar(e){

        numeroarchivos++;
        porcentaje= 100 /cargararchivos.length;
        
        document.querySelector("#carga span").innerHTML = Math.ceil(porcentaje * numeroarchivos)+"%";

        document.querySelector("#carga meter").innerHTML = Math.ceil(porcentaje * numeroarchivos);

        if(numeroarchivos == cargararchivos.length){

            document.querySelector("#lienzo").style.display = "block";
            document.querySelector("#tablero").style.display = "block";


            document.querySelector("#carga").style.opacity = 0;

            setTimeout(function(){

                document.querySelector("#carga").style.display = "none";     

            },10)

            juego.teclado();
            juego.tiempo();

        }
        
    }
    

})

InicioJuego2.addEventListener('click', (e)=>{
    e.preventDefault();
    
    
    document.querySelector("#pantallainicio").parentNode.removeChild(document.querySelector("#pantallainicio"));

    canvas = document.querySelector("#lienzo");
    ctx = canvas.getContext("2d");

    document.querySelector("#carga").style.display = "block";

    


    // NIVEL 1  // NIVEL 1 // NIVEL 1 // NIVEL 1 // NIVEL 1 // NIVEL 1 // NIVEL 1 // NIVEL 1

    datos.plano3 = new Image();
    datos.plano3.src = "IMG/nivel2/fondo nivel 3.jpg";

    
    datos.texturaPlataforma = new Image();
    datos.texturaPlataforma.src = "IMG/nivel1/texturaplata.jpg";

    datos.bloque = [
    {"x":0   , "y":334 , "ancho":66 , "alto":162},
	{"x":160 , "y":274 , "ancho":66 , "alto":222},
	{"x":227 , "y":290 , "ancho":66 , "alto":162},
	{"x":0   , "y":385 , "ancho":223 , "alto":111},
	{"x":160 , "y":352 , "ancho":223 , "alto":144},
	{"x":435 , "y":241 , "ancho":66 , "alto":255},
	{"x":522 , "y":346 , "ancho":67 , "alto":150},
	{"x":401 , "y":389 , "ancho":223 , "alto":107},
	{"x":589 , "y":261 , "ancho":200 , "alto":235},
	{"x":864 , "y":410 , "ancho":66 , "alto":86},
	{"x":921 , "y":383 , "ancho":66 , "alto":113},
	{"x":1078 , "y":353 , "ancho":173 , "alto":113},
	{"x":1251 , "y":353 , "ancho":173 , "alto":143},
	{"x":1518 , "y":353 , "ancho":79 , "alto":143},
	{"x":1690 , "y":353 , "ancho":117 , "alto":219},
	{"x":1807 , "y":277 , "ancho":160 , "alto":332},
	{"x":2065 , "y":304 , "ancho":160 , "alto":193},
	{"x":2320 , "y":251 , "ancho":225 , "alto":250},
	{"x":2280 , "y":360 , "ancho":155 , "alto":140},
	{"x":2690 , "y":-4 , "ancho":310 , "alto":156},
	{"x":2690 , "y":284 , "ancho":310 , "alto":212}]
    
    // plataforma LOGICA 

    datos.plataforma=[
    {"x":0   , "y":334  , "ancho":66 ,  "alto":12},
	{"x":160 , "y":274  , "ancho":68 ,  "alto":9},
	{"x":227 , "y":290  , "ancho":74 ,  "alto":11},
	{"x":0   , "y":385 , "ancho":160 ,  "alto":6},
	{"x":160 , "y":352  , "ancho":225 , "alto":10},
	{"x":435 , "y":241  , "ancho":71 ,  "alto":10},
	{"x":522 , "y":346  , "ancho":65 ,  "alto":9},
	{"x":401 , "y":389  , "ancho":200 , "alto":300},
	{"x":589 , "y":261  , "ancho":196 , "alto":300},
	{"x":864 , "y":410  , "ancho":66 ,  "alto":114.7},
	{"x":920 , "y":383  , "ancho":60 ,  "alto":130},
	{"x":1078 , "y":353  , "ancho":174 ,"alto":12},
	{"x":1251 , "y":353  , "ancho":177 ,"alto":11},
	{"x":1518 , "y":353  , "ancho":79 , "alto":11},
	{"x":1690 , "y":353  , "ancho":110 ,"alto":9},
	{"x":1807 , "y":281  , "ancho":159 ,"alto":220.4},
	{"x":2066 , "y":304  , "ancho":157 ,"alto":8},
	{"x":2065 , "y":304  , "ancho":86 , "alto":900},
	{"x":2280 , "y":360  , "ancho":180 ,"alto":1300},
	{"x":2325 , "y":250  , "ancho":218 ,"alto":1300},
	{"x":2690 , "y":284   , "ancho":310 ,"alto":212},
	{"x":2690 , "y":-4  , "ancho":311 , "alto":116}]
    
    
    // JUGADOR 

    datos.imgjugador= new Image();
    datos.imgjugador.src= "IMG/nivel1/jugador1.png";

    datos.imgjugador.onload = function(){

    }

    // PRELOAD

    let cargararchivos = [datos.plano3,datos.texturaPlataforma];
    let numeroarchivos = 0;
    let porcentaje = 0;

    for(let i=0; i<cargararchivos.length;i++){

        cargararchivos[i].addEventListener("load", precargar)
    }

    function precargar(e){

        numeroarchivos++;
        porcentaje= 100 /cargararchivos.length;
        
        document.querySelector("#carga span").innerHTML = Math.ceil(porcentaje * numeroarchivos)+"%";

        document.querySelector("#carga meter").innerHTML = Math.ceil(porcentaje * numeroarchivos);

        if(numeroarchivos == cargararchivos.length){

            document.querySelector("#lienzo").style.display = "block";
            document.querySelector("#tablero").style.display = "block";


            document.querySelector("#carga").style.opacity = 0;

            setTimeout(function(){

                document.querySelector("#carga").style.display = "none";     

            },10)

            juego.teclado();
            juego.tiempo();

        }
        
    }
})

InicioJuego3.addEventListener('click', (e)=>{
    e.preventDefault();
    
    
    document.querySelector("#pantallainicio").parentNode.removeChild(document.querySelector("#pantallainicio"));

    canvas = document.querySelector("#lienzo");
    ctx = canvas.getContext("2d");

    document.querySelector("#carga").style.display = "block";

    


    // NIVEL 1  // NIVEL 1 // NIVEL 1 // NIVEL 1 // NIVEL 1 // NIVEL 1 // NIVEL 1 // NIVEL 1

    datos.plano3 = new Image();
    datos.plano3.src = "IMG/nivel3/fondo nivel 3.jpg";

    
    datos.texturaPlataforma = new Image();
    datos.texturaPlataforma.src = "IMG/nivel1/texturaplata.jpg";

    datos.bloque = [
    {"x":0   , "y":334 , "ancho":66 , "alto":162},
	{"x":160 , "y":274 , "ancho":66 , "alto":222},
	{"x":227 , "y":290 , "ancho":66 , "alto":162},
	{"x":0   , "y":385 , "ancho":223 , "alto":111},
	{"x":160 , "y":352 , "ancho":223 , "alto":144},
	{"x":435 , "y":241 , "ancho":66 , "alto":255},
	{"x":522 , "y":346 , "ancho":67 , "alto":150},
	{"x":401 , "y":389 , "ancho":223 , "alto":107},
	{"x":589 , "y":261 , "ancho":200 , "alto":235},
	{"x":864 , "y":410 , "ancho":66 , "alto":86},
	{"x":921 , "y":383 , "ancho":66 , "alto":113},
	{"x":1078 , "y":353 , "ancho":173 , "alto":113},
	{"x":1251 , "y":353 , "ancho":173 , "alto":143},
	{"x":1518 , "y":353 , "ancho":79 , "alto":143},
	{"x":1690 , "y":353 , "ancho":117 , "alto":219},
	{"x":1807 , "y":277 , "ancho":160 , "alto":332},
	{"x":2065 , "y":304 , "ancho":160 , "alto":193},
	{"x":2320 , "y":251 , "ancho":225 , "alto":250},
	{"x":2280 , "y":360 , "ancho":155 , "alto":140},
	{"x":2690 , "y":-4 , "ancho":310 , "alto":156},
	{"x":2690 , "y":284 , "ancho":310 , "alto":212}]
    
    // plataforma LOGICA 

    datos.plataforma=[
    {"x":0   , "y":334  , "ancho":66 ,  "alto":12},
	{"x":160 , "y":274  , "ancho":68 ,  "alto":9},
	{"x":227 , "y":290  , "ancho":74 ,  "alto":11},
	{"x":0   , "y":385 , "ancho":160 ,  "alto":6},
	{"x":160 , "y":352  , "ancho":225 , "alto":10},
	{"x":435 , "y":241  , "ancho":71 ,  "alto":10},
	{"x":522 , "y":346  , "ancho":65 ,  "alto":9},
	{"x":401 , "y":389  , "ancho":200 , "alto":300},
	{"x":589 , "y":261  , "ancho":196 , "alto":300},
	{"x":864 , "y":410  , "ancho":66 ,  "alto":114.7},
	{"x":920 , "y":383  , "ancho":60 ,  "alto":130},
	{"x":1078 , "y":353  , "ancho":174 ,"alto":12},
	{"x":1251 , "y":353  , "ancho":177 ,"alto":11},
	{"x":1518 , "y":353  , "ancho":79 , "alto":11},
	{"x":1690 , "y":353  , "ancho":110 ,"alto":9},
	{"x":1807 , "y":281  , "ancho":159 ,"alto":220.4},
	{"x":2066 , "y":304  , "ancho":157 ,"alto":8},
	{"x":2065 , "y":304  , "ancho":86 , "alto":900},
	{"x":2280 , "y":360  , "ancho":180 ,"alto":1300},
	{"x":2325 , "y":250  , "ancho":218 ,"alto":1300},
	{"x":2690 , "y":284   , "ancho":310 ,"alto":212},
	{"x":2690 , "y":-4  , "ancho":311 , "alto":116}]
    
    
    // JUGADOR 

    datos.imgjugador= new Image();
    datos.imgjugador.src= "IMG/nivel1/jugador1.png";

    datos.imgjugador.onload = function(){

    }

    // PRELOAD

    let cargararchivos = [datos.plano3,datos.texturaPlataforma];
    let numeroarchivos = 0;
    let porcentaje = 0;

    for(let i=0; i<cargararchivos.length;i++){

        cargararchivos[i].addEventListener("load", precargar)
    }

    function precargar(e){

        numeroarchivos++;
        porcentaje= 100 /cargararchivos.length;
        
        document.querySelector("#carga span").innerHTML = Math.ceil(porcentaje * numeroarchivos)+"%";

        document.querySelector("#carga meter").innerHTML = Math.ceil(porcentaje * numeroarchivos);

        if(numeroarchivos == cargararchivos.length){

            document.querySelector("#lienzo").style.display = "block";
            document.querySelector("#tablero").style.display = "block";

            document.querySelector("#carga").style.opacity = 0;

            setTimeout(function(){

                document.querySelector("#carga").style.display = "none";     

            },10)

            juego.teclado();
            juego.tiempo();

        }
        
    }
})

salir.addEventListener('click',e=>{
    
    window.location.reload();



})
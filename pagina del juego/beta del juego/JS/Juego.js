// METODOS DEL OBJETO JUEGO 



let juego ={


    teclado : function(){

        

        /*=============================================
           EVENTOS TECLADO
           =============================================*/
   
           document.addEventListener("keydown", juego.oprimir)
           document.addEventListener("keyup", juego.soltar)
   
    },
   
    oprimir : function(tecla){
   
            /*=============================================
           OPRIMIR TECLADO
           =============================================*/
            
            tecla.preventDefault();
            switch(tecla.keyCode){
                case 37: datos.izquierda = true; break;
                case 38: datos.salto = true; break;
                case 39: datos.derecha = true; break;
                
            }
   
        },
   
    soltar: function(tecla){
   
            /*=============================================
           SOLTAR TECLADO
           =============================================*/
   
            tecla.preventDefault();
            switch(tecla.keyCode){
                case 37: datos.izquierda = false; break;
                case 38: datos.salto = false; break;
                case 39: datos.derecha = false; break;
                
            }
   
        },
   
    tiempo: function(){
        // LLAMADO DEL CANVAS

        lienzo.canvas();


        // GRAVEDAD 

        datos.jugador_y+= datos.gravedad;

        if(datos.gravedad < datos.limiteGravedad){

            datos.gravedad += datos.peso;

        }

        // COLISIONES 

        for(let i=0 ; i < datos.plataforma.length ; i++){


            colisionesPlataforma=()=>{

                // no colision de plataforma de jugador de arriba hacia abajo
                
                if((datos.jugador_y + datos.jugador_alto) < datos.plataforma[i].y){return false}

                // no colision de plataforma de jugador de abajo hacia arriba

                if(datos.jugador_y > (datos.plataforma[i].y+datos.plataforma[i].alto)){return false}

                 // no colision de plataforma de jugador de izquierda a derecha

                if((datos.jugador_x + datos.jugador_ancho) < datos.plataforma[i].x){return false}

                 // no colision de plataforma de jugador de izquierda a derecha

                if(datos.jugador_x > (datos.plataforma[i].x+datos.plataforma[i].ancho)){return false}



                return true;
                
            }

            colisionesPlataforma();


            // colision de arriba hacia abajo

            if(colisionesPlataforma() && (datos.jugador_y + datos.jugador_alto) < datos.plataforma[i].y + datos.gravedad){

                datos.gravedad = 0;
                datos.jugador_y = datos.plataforma[i].y - datos.jugador_alto;

            }  

            // colision de abajo hacia arriba

            if(colisionesPlataforma() && datos.jugador_y  - datos.gravedad > (datos.plataforma[i].y + datos.plataforma[i].alto)){

                datos.gravedad = 1;
                datos.jugador_y = datos.plataforma[i].y + datos.jugador_alto;

            }  
            // ----------------------

            if(datos.desplazamientoEscenario <= datos.limiteEscenario){


                // colision de IZQUIERDA A DERECHA 

                if(colisionesPlataforma() && (datos.jugador_x + datos.jugador_ancho) < datos.plataforma[i].x + datos.movimientoJugador){

                    datos.movimientoJugador = 0;
                    datos.jugador_x = datos.plataforma[i].x - datos.jugador_ancho;

                }  

                // COLISION DERECHA A IZQUIERDA 

                if(colisionesPlataforma() && datos.jugador_x - datos.movimientoJugador > (datos.plataforma[i].x + datos.plataforma[i].ancho)){

                    datos.movimientoJugador = 0;
                    datos.jugador_x = datos.plataforma[i].x + datos.jugador_ancho;

                }   

            }else{

                // colision de IZQUIERDA A DERECHA 

                if(colisionesPlataforma() && (datos.jugador_x + datos.jugador_ancho) < datos.plataforma[i].x - datos.movimiento){

                    datos.movimiento = 0;
                    datos.jugador_x = datos.plataforma[i].x - datos.jugador_ancho;

                }  

                // COLISION DERECHA A IZQUIERDA 

                if(colisionesPlataforma() && datos.jugador_x + datos.movimiento > (datos.plataforma[i].x + datos.plataforma[i].ancho)){

                    datos.movimiento = 0;
                    datos.jugador_x = datos.plataforma[i].x + datos.jugador_ancho;

                }   



            }

            

            // SALTO

            if(datos.salto && datos.gravedad == 0){

                datos.gravedad = datos.alturaSalto;
            }







        }


        // CAIDA DEL JUGADOR 

        if( datos.jugador_y > 500){

            datos.reset =true;

        }

        

        // resetear el nivel 

        

        if(datos.reset){

            datos.reset = false;
            datos.gravedad = 0;
            datos.movimiento =0 ;
            datos.desplazamientoEscenario = 0;
            datos.jugador_y= 200;
            datos.jugador_x=70;



            // quitando vidas
            datos.vidas = datos.vidas-1;

            if(datos.vidas ==2){

                document.querySelector("#vidas ul li:nth-child(3)").innerHTML="x";
            }
            if(datos.vidas ==1){

                document.querySelector("#vidas ul li:nth-child(2)").innerHTML="x";
            }
            if(datos.vidas ==0){

                document.querySelector("#vidas ul li:nth-child(1)").innerHTML="x";

                document.querySelector("#gameover").style.display = "block";

                cancelAnimationFrame(animacion);
                setTimeout(function(){
                    window.location.reload();
                }, 4000);
                
            }

            // reseteando la plataforma 

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


        }


        


        // EJECUTANDO LINEA DE TIEMPO 
        animacion = frame(juego.tiempo);

        // MOVIMIENTO HORIZONTAL DEL JUGADOR

        if(datos.desplazamientoEscenario<=datos.limiteEscenario){

            datos.jugador_x += datos.movimientoJugador;

        }

        // MOVIMIENTO HORIZONTAL 
        
        datos.desplazamientoEscenario += datos.movimiento;

        // console.log("despla",datos.desplazamientoEscenario )

        // MOVIMIENTO HORIZONTAL DE LA PLATAFORMA

        for(let i=0; i<datos.plataforma.length;i++){

            datos.plataforma[i].x += datos.movimiento;

        }



        // movimiento IZQUIERDA 

        if(datos.izquierda){

            if(datos.desplazamientoEscenario>=0){
                
                datos.movimiento=0;

            }else if(datos.desplazamientoEscenario<=datos.limiteEscenario){

                if(datos.jugador_x<=70){

                    datos.movimiento = datos.velocidad;

                }
                else{

                    datos.movimiento=0;
                    datos.movimientoJugador = -datos.velocidad;

                }

            }else{

                datos.movimiento=datos.velocidad;
            }
            
            
            
        }

        

        // MOVIMIENTO DERECHA 

        if(datos.derecha){


            if(datos.desplazamientoEscenario<= datos.limiteEscenario){
                
                datos.movimiento=0;
                datos.movimientoJugador = datos.velocidad;
            }           
            else{

                datos.movimiento = -datos.velocidad;
            
            }
                        
             
               
            
            
        }


        



        // DETENIENDO MOVIMIENTO ESCENARIO 


        if(!datos.izquierda && !datos.derecha  ){

            datos.movimiento=0;
            datos.movimientoJugador=0;

        }




    }
   
            

    

}
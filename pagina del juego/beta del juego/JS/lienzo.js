// OBJETO LIENZO


let lienzo = {
    canvas : function(){

        // BORRAR EL CANVAS 
        
        ctx.clearRect(0,0,canvas.width,canvas.height);

        // FONDO

        ctx.drawImage(datos.plano3, datos.desplazamientoEscenario, 0, datos.plano3.naturalWidth, datos.plano3.naturalHeight);

        ctx.drawImage(datos.plano3, datos.desplazamientoEscenario, 0, datos.plano3.naturalWidth, datos.plano3.naturalHeight);

        ctx.drawImage(datos.plano3, datos.desplazamientoEscenario, 0, datos.plano3.naturalWidth, datos.plano3.naturalHeight);


        // BLOQUES TEXTURA

        for(let i =0 ;i<datos.bloque.length; i++){
                        
            ctx.drawImage( datos.texturaPlataforma, datos.bloque[i].x+datos.desplazamientoEscenario, datos.bloque[i].y, datos.bloque[i].ancho, datos.bloque[i].alto);
        
        }


        // JUGADOR 

        
        ctx.drawImage(datos.imgjugador, 0,0, 100, 100, datos.jugador_x, datos.jugador_y, datos.jugador_ancho, datos.jugador_alto);
        

        // dibujo de LAS PLATAFORMAS LOGICAS 

        for(let i =0 ;i<datos.plataforma.length; i++){
            
            ctx.fillStyle = "rgba(255,0,0,0.0)"; 
                        
            ctx.fillRect( datos.plataforma[i].x, datos.plataforma[i].y, datos.plataforma[i].ancho, datos.plataforma[i].alto);
        
        }

    }
}
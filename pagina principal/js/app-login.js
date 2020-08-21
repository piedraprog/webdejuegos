//Documento JS para el sistema de LOGEO EN LA PAGINA PRINCIPAL

//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES//VARIABLES

let form = document.getElementById('login-acceder')
let ingresar = document.getElementById('ingresar');
let cerrar =  document.getElementById('cerrar-sesion');
let mensaje = document.getElementById('mensaje');
let Uonline = document.getElementById('Uonline')



// FUNCIONES // FUNCIONES // FUNCIONES // FUNCIONES // FUNCIONES // FUNCIONES // FUNCIONES // FUNCIONES // FUNCIONES // FUNCIONES // FUNCIONES // FUNCIONES // FUNCIONES // FUNCIONES // FUNCIONES 


const IniciarSesion=(user_log,pass_log)=>{

    arrayUsuarios = JSON.parse(localStorage.getItem('Usuarios')); 
        
        
    arrayUsuarios.forEach(element=>{ 

        // console.log(element.usuario);
        // console.log(user_log);

        if(element.usuario == user_log && element.contra == pass_log){

            
            element.online_sesion=true;
            sessionStorage.setItem('online',element.online_sesion )
            sessionStorage.setItem('nombre', user_log)

            mostrarSesion(); 

            guardarDB();
            
        //}else if(){
        }
        else{
    
            mensaje.innerHTML=`<p>*acceso denegado usuario y/o clave incorrecto*</p>`;    
            console.log("hola");    
        }       
    });  

        
        
        
        

}    


const mostrarSesion=()=>{

    online_sesion = sessionStorage.getItem('online');
    nombre_UIO = sessionStorage.getItem('nombre');
    
    if(online_sesion){

        Uonline.innerHTML=`<a>${nombre_UIO}</a>`

        document.getElementById('acceder').style.display = "none";
        document.getElementById('online').style.display = "block";
        
        
    
        
        
    }else{

        
        document.getElementById('online').style.display = "none";
        document.getElementById('acceder').style.display = "block";  

        
    }

}


// EVENTOS // EVENTOS // EVENTOS // EVENTOS // EVENTOS // EVENTOS // EVENTOS // EVENTOS // EVENTOS // EVENTOS // EVENTOS // EVENTOS // EVENTOS // EVENTOS // EVENTOS // EVENTOS // EVENTOS // EVENTOS // EVENTOS // EVENTOS // EVENTOS 


cerrar.addEventListener('click', (e) =>{

    e.preventDefault();    
    online_sesion=false;
    sessionStorage.clear()        
    console.log(online_sesion);
    mostrarSesion();

});



ingresar.addEventListener('click', (e) =>{

    e.preventDefault();

    let user_log = document.getElementById('user').value;
    let pass_log = document.getElementById('pass').value;

    form.reset();

    IniciarSesion(user_log,pass_log);
    

});


// Evento para que se muestre el login online o fuera de la sesion

document.addEventListener("DOMContentLoaded",mostrarSesion());





//JQERRY PARA HACER QUE SE DESPLIEGUE EL LOGIN Y EL DE CERRAR SESION //JQERRY PARA HACER QUE SE DESPLIEGUE EL LOGIN Y EL DE CERRAR SESION//JQERRY PARA HACER QUE SE DESPLIEGUE EL LOGIN Y EL DE CERRAR SESION

$(function(){
    $('#login').click(function(){
        $(this).next('#login-content').slideToggle();
        $(this).toggleClass('active');         
    });    
});

$(function(){
    $('#login2').click(function(){
        $(this).next('#login-online').slideToggle();
        $(this).toggleClass('active');         
    });    
});


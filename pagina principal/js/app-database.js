// FUNCIONES DE LOCAL STORAGE // FUNCIONES DE LOCAL STORAGE// FUNCIONES DE LOCAL STORAGE// FUNCIONES DE LOCAL STORAGE// FUNCIONES DE LOCAL STORAGE// FUNCIONES DE LOCAL STORAGE

//variables del formulario 

let boton_reg = document.getElementById('registroDB')
let alerta1 = document.getElementById('alerta1')
let alerta2 = document.getElementById('alerta2')
let alerta3 = document.getElementById('alerta3')

let arrayUsuarios=[];

const crearDB=(user_reg ,clave_reg,correo_reg,fechanac_reg,numtarjeta_reg,numsegutarjeta_reg)=>{

    let info_Usuario={

        usuario: user_reg,
        contra: clave_reg,
        correo: correo_reg,
        cumpleaños: fechanac_reg,
        tarjeta_credito: numtarjeta_reg,
        cod_segtarjeta: numsegutarjeta_reg,
        juego_valido: true,
        puntaje: 0,
        online_sesion: false

    }

    arrayUsuarios.push(info_Usuario);
    
    return info_Usuario;
};


const guardarDB=()=>{

    localStorage.setItem('Usuarios', JSON.stringify(arrayUsuarios));

};


const eliminarUsuarioDB=()=>{

};

const editarUsuarioDB=()=>{

};

// Funcion para verificar que el usuario tiene mas de 18 años
function calculateAge(birthday) {

    let birthday_arr = birthday.split("-");

    let birthday_date = new Date(birthday_arr[0], birthday_arr[1] - 1, birthday_arr[2]);

    let ageDifMs = Date.now() - birthday_date.getTime();

    let ageDate = new Date(ageDifMs);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//EVENTOS 


boton_reg.addEventListener('click', (e)=>{

    e.preventDefault();

    let user_reg = document.getElementById('username').value

    let clave_reg = document.getElementById('password').value

    let vf_clavereg = document.getElementById('vrpassword').value

    let correo_reg = document.getElementById('email').value

    let vf_correoreg = document.getElementById('vremail').value

    let fechanac_reg = document.getElementById('date').value

    let numtarjeta_reg = document.getElementById('Credit-card').value

    let numsegutarjeta_reg = document.getElementById('SecurityCredit-card').value

    let age = calculateAge(fechanac_reg);

    if(user_reg ===''  && vf_clavereg==='' &&correo_reg==='' && vf_correoreg==='' &&fechanac_reg ===''){

        
        alerta3.innerHTML=`<h4>introduzca los datos marcados con *</h4>`

    }else if(clave_reg != vf_clavereg){
        
        alerta1.innerHTML=`<h4>Clave invalida y/o incorrecta</h4>`
        
    }else if(correo_reg != vf_correoreg){

        alerta2.innerHTML=`<h4>Correo invalido y/o incorrecto</h4>`
        
    }else if(age<18){ 
        alert("DEBES SER MAYOR DE 18 AÑOS PARA PODER REGISTRARTE")
        
        
    }else{

        crearDB(user_reg ,clave_reg,correo_reg,fechanac_reg,numtarjeta_reg,numsegutarjeta_reg);

        console.log('aqui');

        guardarDB();
    }
    
})
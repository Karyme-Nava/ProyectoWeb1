function contarVisita(){
    if(localStorage.getItem('visita')==null){
        localStorage.setItem('visita', '0');
    }
    let visita=JSON.parse(localStorage.getItem('visita'));
    visita++;
    localStorage.setItem('visita', JSON.stringify(visita));
    mostrarVisitantes();  
}

function mostrarVisitantes(){
    obtenerUsuario();
    let visita=JSON.parse(localStorage.getItem('visita'));
    document.getElementById("visitante").innerHTML="Eres el visitante "+visita;
}

/*Registro / Inicio Sesion*/

function login(){
    var mail=document.getElementById("email").value; //Usamos el id del doc html
    var password=document.getElementById("password").value;
    /*PONER EN TRUE EL VALOR DE LOG*/
    if(verificarUser(mail,password)){
        //document.getElementById("userLog").innerHTML="Bienvenido/a "+mail;
        document.getElementById("mostrarUsuario").style.display='inline';
        document.getElementById("mostrarUsuario").innerHTML=mail.substring(0,8);
        document.getElementById("btnRegistro").style.display='none';
        document.getElementById("btnInicioS").style.display='none';
        document.getElementById("btnCerrarS").style.display='block';
        document.getElementById("email").value=""; //Dejar cajas en blanco
        document.getElementById("password").value=""; //Dejar cajas en blanco
    }
}


function verificarUser(mail,password){
    if(localStorage.getItem('arreglo')!=null){ //Validar si hay arreglo de usuarios
        var datos=JSON.parse(localStorage.getItem('arreglo')); //Desencapsular
        
        for(let index=0; index<datos.length; index++){
            var email=datos[index].mail;
            var contra=datos[index].password;
            if(email==mail){
                if(contra==password){
                    datos[index].log=true;
                    borrarLocalStorage();
                    localStorage.setItem('arreglo',JSON.stringify(datos));
                    return true
                }else {document.getElementById("userLog").innerHTML="Contraseña Incorrecta"; return false}
            }else{
                document.getElementById("userLog").innerHTML="El usuario "+mail+" no existe";
            }
        }
    }
    return false;
}


function validacion(){
    
    var erPass = new RegExp("^(.){8,16}$"); //Punto -> Para que acepte todo
    var erCorreo = new RegExp("^[A-Za-z0-9_]+(@alumnos.itsur.edu.mx)$");

    let validacion="";

    var correo=document.getElementById("mail").value;
    var password=document.getElementById("password").value;
    var password2=document.getElementById("password2").value;

    if(!erCorreo.test(correo)){
        validacion+="correo"
    }
    if(!erPass.test(password) || password!=password2){
        validacion+="password,"
    }

    if(validacion!=""){
        document.getElementById("registroUser").innerHTML="Verificar: "+validacion;
        return false
    }else{
        return true;
    }
}

function registra(){

    var mail=document.getElementById("mail").value;
    var password=document.getElementById("password").value;

    if(validacion()){
        document.getElementById("registroUser").innerHTML="Datos Correctos";
        
        objUsuario={
            mail:mail,
            password:password,
            log: false
        }
        insertar(objUsuario);
        vaciarCajas();
        
    }
}

function vaciarCajas(){
    document.getElementById("mail").value="";
    document.getElementById("password").value="";
}

function borrarLocalStorage(){
    localStorage.removeItem('arreglo')
    
}

function insertar(obj){
    if(localStorage.getItem('arreglo')==null){  //Verificar si ya hay un arreglo en el storage, Entra si no existe un arreglo
        localStorage.setItem('arreglo','[]');
    }
    //localStorage.setItem("user", JSON.stringify(objUsuario)); //stringify para mandar datos desencapsulados
    var datos=JSON.parse(localStorage.getItem('arreglo')); 
    datos.push(obj);
    localStorage.setItem('arreglo',JSON.stringify(datos)); //Agregar item nuevo a localStorage
}

/*Registro / Inicio Sesion FIN*/


/* CERRAR SESION*/

function obtenerUsuario(){
    if(localStorage.getItem('arreglo')!=null){ //Validar si hay arreglo de usuarios
        var datos=JSON.parse(localStorage.getItem('arreglo')); //Desencapsular
       
        for(let index=0; index<datos.length; index++){
            var mail=datos[index].mail;
            var log=datos[index].log;
            if(log){
                document.getElementById("mostrarUsuario").style.display='inline';
                document.getElementById("mostrarUsuario").innerHTML=mail.substring(0,8);
                document.getElementById("btnRegistro").style.display='none';
                document.getElementById("btnInicioS").style.display='none';
                document.getElementById("btnCerrarS").style.display='block';
                return;
            }
        }
    }
}


function cerrarSesion(){
    if(localStorage.getItem('arreglo')!=null){ //Validar si hay arreglo de usuarios
        var datos=JSON.parse(localStorage.getItem('arreglo')); //Desencapsular
       
        for(let index=0; index<datos.length; index++){
            var log=datos[index].log;
            if(log){
                datos[index].log=false;
                borrarLocalStorage()
                localStorage.setItem('arreglo',JSON.stringify(datos));
                document.getElementById("mostrarUsuario").style.display='none';
                document.getElementById("mostrarUsuario").innerHTML="";
                document.getElementById("btnRegistro").style.display='inline';
                document.getElementById("btnInicioS").style.display='inline';
                document.getElementById("btnCerrarS").style.display='none';
                return;
            }
        }
    }
}

function borrarLocalStorage(){
    localStorage.removeItem('arreglo')
}

/* CERRAR SESION FIN*/
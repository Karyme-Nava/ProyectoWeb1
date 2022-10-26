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

function registro(){
    var tituloInfo = document.getElementById("titulotext").value
    var infoCompart = document.getElementById("texto").value

    document.getElementById('submitt').onclick = function() {
    var materia = document.getElementById("SelectMateria").selectedOptions[0].value;

    document.getElementById('submitt').onclick = function() {
    var tipoInformacion = document.getElementById("SelectTipos").selectedOptions[0].value;

    document.getElementById('submitt').onclick = function() {
    var carrier = document.getElementById("SelectCarrera").selectedOptions[0].value;

        document.getElementById('submitt').onclick = function() {
        semester = document.getElementById("SelectSemestre").selectedOptions[0].value;
   
    console.log(carrier)
    console.log(semester)
    console.log(materia)
    console.log(tipoInformacion)
    console.log(tituloInfo)
    console.log(infoCompart)

    objInformacion = {
        Carrera: carrier,
        Semestre: semester,
        NombreMateria: materia,
        TipoInformacion: tipoInformacion,
        Titulo: tituloInfo,
        InformacionCompartir: infoCompart,
    };
    insertar(objInformacion)
    /*document.getElementById("container2").innerHTML = carrier;*/
}
}
}
}
function insertar(obj){
    if(localStorage.getItem('InformacionParaCompartir')==null){
        localStorage.setItem('InformacionParaCompartir','[]')
    }
    //localStorage.setItem("USER",JSON.stringify(objUsuario))
    var datos = JSON.parse(localStorage.getItem('InformacionParaCompartir'))
    datos.push(obj)
    localStorage.setItem('InformacionParaCompartir',JSON.stringify(datos))
}
}

/*window.addEventListener('load',function(){
    var titulo = JSON.parse(localStorage.getItem("Titulo"));
    this.document.getElementById("title").innerHTML="Tituto: " + titulo;
    var informacion = JSON.parse(localStorage.getItem("InformacionCompartir"));
    this.document.getElementById("information").innerHTML="" + informacion;
})*/

function load(){
    let guardarPosiciones = [];
    var contadorImpresiones = 0;
    var titulo = JSON.parse(localStorage.getItem("InformacionParaCompartir"));

    for (var i = 0; i < 5; i++) {
        if(titulo[i].NombreMateria == "Programación web I"){
            /* contadorImpresiones++; */
            if(contadorImpresiones==0){
                this.document.getElementById("title").innerHTML= titulo[i].Titulo;
                this.document.getElementById("information").innerHTML= titulo[i].InformacionCompartir;
                this.document.getElementById("information").style.borderColor = "#AEBB61";
                //this.document.getElementsByClassName("information")[0].className = ""

              //  $(information).css("border-bottom-color: #AEBB61");
                contadorImpresiones++;
                //guardarPosiciones[i] = contadorImpresiones;
               // alert("Entro aqui en el contador == 0"+", la i es "+i);
            }
            else if(titulo[i].NombreMateria == "Programación web I" && contadorImpresiones==1){
                this.document.getElementById("title2").innerHTML= titulo[i].Titulo;
                this.document.getElementById("information2").innerHTML= titulo[i].InformacionCompartir;
                this.document.getElementById("information2").style.borderColor = "#AEBB61";
           //     $(information2).css("border-bottom-color: #AEBB61");
                contadorImpresiones++;
                //guardarPosiciones[i] = contadorImpresiones;
                //alert("Entro aqui en el contador == 1"+", la i es "+i);
            } else if(titulo[i].NombreMateria == "Programación web I" && contadorImpresiones==2){
                this.document.getElementById("title3").innerHTML= titulo[i].Titulo;
                this.document.getElementById("information3").innerHTML= titulo[i].InformacionCompartir;
                this.document.getElementById("information3").style.borderColor = "#AEBB61";
             //   $(information3).css("border-bottom-color: #AEBB61");
                //border-bottom-color: #AEBB61; 
                contadorImpresiones++;
                //guardarPosiciones[i] = contadorImpresiones;
               // alert("Entro aqui en el contador == 2"+", la i es "+i);
            }
            else if(titulo[i].NombreMateria == "Programación web I" && contadorImpresiones==3){
                this.document.getElementById("title4").innerHTML= titulo[i].Titulo;
                this.document.getElementById("information4").innerHTML= titulo[i].InformacionCompartir;
                this.document.getElementById("information4").style.borderColor = "#AEBB61";
                contadorImpresiones++;
              //  $(information4).css("border-bottom-color: #AEBB61");
                //guardarPosiciones[i] = contadorImpresiones;
               // alert("Entro aqui en el contador == 3"+", la i es "+i);
            }
            else if(titulo[i].NombreMateria == "Programación web I" && contadorImpresiones==4){
                this.document.getElementById("title5").innerHTML=  titulo[i].Titulo;
                this.document.getElementById("information5").innerHTML= titulo[i].InformacionCompartir;
                this.document.getElementById("information5").style.borderColor = "#AEBB61";
                contadorImpresiones++;
                //$(information5).css("border-bottom-color: #AEBB61");
                //guardarPosiciones[i] = contadorImpresiones;
               // alert("Entro aqui en el contador == 4"+", la i es "+i);
            }
        }
    }    
    /*
        alert("Arreglo[0] ="+guardarPosiciones[0]);
        alert("Arreglo[1] ="+guardarPosiciones[1]);
        alert("Arreglo[2] ="+guardarPosiciones[2]);
        alert("Arreglo[3] ="+guardarPosiciones[3]);
        alert("Arreglo[4] ="+guardarPosiciones[4]);
        */
}
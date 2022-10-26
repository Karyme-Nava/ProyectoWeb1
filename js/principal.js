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
    let visita=JSON.parse(localStorage.getItem('visita'));
    document.getElementById("visitante").innerHTML="Eres el visitante "+visita;
}

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
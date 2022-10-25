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
  //  valida();
  var tituloInfo = document.getElementById("titulotext").value
  var infoCompart = document.getElementById("texto").value

  document.getElementById('submit').onclick = function() {
    var materia = document.getElementById("SelectMateria").selectedOptions[0].value;

    document.getElementById('submit').onclick = function() {
    var tipoInformacion = document.getElementById("SelectTipos").selectedOptions[0].value;

    /*document.getElementById("container").innerHTML = 'La materia seleccionada es ' + materia;
    document.getElementById("container2").innerHTML = 'El tipo de informacion seleccionada es ' + tipoInformacion;
    */
    console.log(materia)
    console.log(tipoInformacion)
    objInformacion = {
        nombreMateria: materia,
        TipoInformacion: tipoInformacion,
        Titulo: tituloInfo,
        InformacionCompartir: infoCompart,
    };
    insertar(objInformacion)
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
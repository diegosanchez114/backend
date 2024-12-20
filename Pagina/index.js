var datos = []

function esSoloNumero(dato) {
    const regex= /^[0-9]+$/;
    return regex.test(dato);
}

function esCorreoValido(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

function Guardar() {

    cedula= document.getElementById("cedula").value
    pnombre= document.getElementById("pnombre").value
    snombre= document.getElementById("snombre").value
    papellido= document.getElementById("papellido").value
    sapellido= document.getElementById("sapellido").value    



    if(cedula== undefined || cedula== null || cedula== '' || esSoloNumero(cedula)== false){
        Swal.fire({
            title: "Error",
            text: "La cedula es obligatoria o digito caracteres equivocados",
            icon: "error"
          });
        return false
    }

        var validacion= datos.findIndex((item) => item.cedula == cedula)

        if (validacion != -1){
            Swal.fire({
                title: "Error",
                text: "La cedula Ya existe",
                icon: "error"
              });
            return false
        }

        
        

    

    if(pnombre== undefined || pnombre== null || pnombre== ''){
        Swal.fire({
            title: "Error",
            text: "El Primer Nombre es obligatorio",
            icon: "error"
          });
        return false
    }

    if(papellido== undefined || papellido== null || papellido== '' ){
        Swal.fire({
            title: "Error",
            text: "El Primer Apellido es obligatorio",
            icon: "error"
          });
        return false
    }

  /*   if(post.snombre== undefined || post.snombre== null ){
        response.json({state:false, mensaje: "El campo snombre es obligatorio pero puede venir vacio"})
        return false
    }

    
    

    if(post.sapellido== undefined || post.sapellido== null ){
        response.json({state:false, mensaje: "El campo sapellido es obligatorio pero puede venir vacio"})
        return false
    } */


    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("cedula", cedula);
    urlencoded.append("pnombre", pnombre);
    urlencoded.append("snombre", snombre);
    urlencoded.append("papellido", papellido);
    urlencoded.append("sapellido", sapellido);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
    };

    fetch("http://localhost:3000/usuarios/Guardar", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            result= JSON.parse(result)
            if(result.state == false){
                Swal.fire({
                    title: "Error",
                    text: result.mensaje,
                    icon: "error"
                  });
            }
            else{
                Swal.fire({
                    title: "Bien",
                    text: result.mensaje,
                    icon: "success"
                  }); 
            }
        })
        .catch((error) => console.error(error));


}



//console.log(result)
let usuarios = [
    { nombre: "Alfredo", apellido: "Dla", direccion: "Calle 22", estadoCivil:"Soltero", cedula:1040222124, edad:21, genero:"M", telefono:3004406068 },
    { nombre: "Angel", apellido: "Dla", direccion: "# 22", estadoCivil:"Casado", cedula:1048222425, edad:21, genero:"M", telefono:3145950797 },
    { nombre: "Hansel", apellido: "Dla", direccion: "D - 22", estadoCivil:"Viudo", cedula:1048526314, edad:21, genero:"M", telefono:3215749225 },
]

let bodyTabla = document.getElementById("usuTabla")

const listar = () => {
    let contenido = ""
    for (let i = 0; i < usuarios.length; i++) {
        contenido += "<tr><td>" + usuarios[i].nombre + "</td><td>" + usuarios[i].apellido + "</td><td>" +
         usuarios[i].direccion + "</td><td>" + usuarios[i].estadoCivil + "</td><td>" + 
         usuarios[i].cedula + "</td><td>" + usuarios[i].edad + "</td><td>" + 
         usuarios[i].genero + "</td><td>" + usuarios[i].telefono + "</td></tr>"
    }
    bodyTabla.innerHTML = contenido
}
console.log("")

const registrar = () => {
    if (validacionCampos()) {
        const cedula = document.getElementById('cedula').value;
        if (validacionId(cedula)) {
            alert("Ya Fue Ingresado Usuario Con Identificacion.")
        }else{
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const direccion = document.getElementById('direccion').value;
            const estadoCivil = document.getElementById('estadoCivil').value;
            const edad = document.getElementById('edad').value;
            const genero = generoString(document.getElementById('generoUsuario').value);
            const telefono = document.getElementById('telefono').value;
            bodyTabla.innerHTML +="<tr><td>" + nombre + "</td><td>" + apellido +
             "</td><td>" + direccion + "</td><td>" + estadoCivil + 
             "</td><td>" + cedula + "</td><td>" + edad + 
             "</td><td>" + genero + "</td><td>" + telefono + "</td></tr>"
            const nuevoUsuario = {
                nombre:nombre,
                apellido:apellido,
                direccion:direccion,
                estadoCivil:estadoCivil,
                cedula:cedula,
                edad:edad,
                genero:genero,
                telefono:telefono
            }
            usuarios.push(nuevoUsuario);
            limipiar();
        }
    } 
}





const validacionId = (cedula) => {
    for (let i = 0; i < usuarios.length; i++) {
        console.log(cedula)
        console.log(usuarios[i].cedula)
        if (cedula == usuarios[i].cedula) {
            return true;
        } 
    }
    return false;
}



const validacionCampos = () => {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const direccion = document.getElementById('direccion').value;
    const estadoCivil = document.getElementById('estadoCivil').value;
    const cedula = document.getElementById('cedula').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('generoUsuario').value;
    const telefono = document.getElementById('telefono').value;


    if (genero == 'genero') {
        alert("Debe Seleccionar Un Genero");
        return false;
    }else{
        if (!nombre || !apellido || !direccion || !estadoCivil || !cedula || !edad || !telefono) {
            alert("Debe Llenar Campos Faltantes");
            return false;
        } else{
            return true;
        }
    }
}

function soloNumeros(evt){
    if (window.event) {
        keynum = evt.keyCode;
    }else{
        keynum = evt.which;
    }
    if ((keynum > 47 && keynum < 58) || keynum == 8 || keynum ==  13) {
        return true;
    }else{
       /*  alert("Solo Numeros"); */
        return false;
    }
}

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnñopqrstuvwxyzáéíóú";
    especiales = [8,13,32];
    teclaEspecial = false;
    for( var i in especiales){
        if (key == especiales[i]) {
            teclaEspecial = true;
            break;
        }
    }
    if (letras.indexOf(tecla) == -1 && !teclaEspecial) {
        return false;
    }
}

function generoString (dato){
    if(dato == 'masculino'){
        return 'M'
    }else{
        return 'F'
    }
}

function limipiar(){
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value= "";
    document.getElementById('direccion').value="";
    document.getElementById('estadoCivil').value="";
    document.getElementById('cedula').value="";
    document.getElementById('edad').value="";
    document.getElementById('generoUsuario').value="";
    document.getElementById('telefono').value="";
}



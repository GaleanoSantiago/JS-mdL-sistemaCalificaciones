/*--------------------------Problema A C10--------------------------*/ 

const sendButton = document.getElementById("snd-nota");
const closeButton = document.getElementById("btn-cerrar");

sendButton.addEventListener("click",()=>{
    let resultado,mensaje;
    try{
        prevRes = parseInt(document.getElementById("nota").value);
        if(isNaN(prevRes)){
            throw "Gracioso";
        }
        resultado = verificarAprobacion(8,5,prevRes);
        mensaje =definirMensaje(prevRes);
    }catch(e){
        resultado = "¿SOS GRASIOSO?";
        mensaje="He descubrierto que intentaste hackear el sitio";
    }
    abrirModal(resultado,mensaje);
})

closeButton.addEventListener("click",()=>{
    cerrarModal();
})

const definirMensaje = (pr)=>{
    let resultado;
    switch(pr){
        case 1: resultado = "No podes ser tan HDP";
        break;
        case 2: resultado = "Sos malisimo para mi materia ò_ó";
        break;
        case 3: resultado = "No sabes casi nada";
        break;
        case 4: resultado = "Muy mal";
        break;
        case 5: resultado = "Mal";
        break;
        case 6: resultado = "Regular";
        break;
        case 7: resultado = "Bien, pero puede mejorar";
        break;
        case 8: resultado = "¡Muy bien!";
        break;
        case 9: resultado = "¡Excelente!";
        break;
        case 10: resultado = "¡Insuperable hdlrcdll!";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprobacion = (nota1, nota2, prevRes)=>{
    promedio = (nota1 + nota2 + prevRes)/3;
    if(promedio>=7){
        return "<span class='text-success'>APROBADO</span>";
    }
    return "<span class='text-danger'>DESAPROBADO</span>";
}

const abrirModal = (res, msg)=>{
    document.querySelector(".resultado").innerHTML=res;
    document.querySelector(".mensaje").innerHTML= "Tu prueba: " + msg;
    let modal = document.querySelector(".Propio-modal-background");
    modal.style.display="flex";
    modal.style.animation = "aparecer 1s forwards";
}

const cerrarModal = ()=>{
    let modal = document.querySelector(".Propio-modal-background");
    modal.style.display="none";
    modal.style.opacity = 0;

}
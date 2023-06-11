// LO QUE ESTÁ EN ESTE ARCHIVO INDEX.JS ES LO QUE SE VE EN LA PANTALLA
import validator from './validator.js';

const entradaTarjeta = document.getElementById("numberCard"); //se captura el espacio de la tarjeta
entradaTarjeta.addEventListener("input", validarYEnmascarar);//escucha el input en entradaTarjeta y ejecuta validarYEnmascarar

const botonAceptar = document.getElementById("aceptar") //se camptura el boton aceptar
botonAceptar.addEventListener("click", validarNumero)//escucha el clic del boton aceptar y ejecuta validarNumero


let numeroTarjetaInterno = "";

function validarYEnmascarar(evento) {
  if (evento.inputType === "insertText") {
    numeroTarjetaInterno = numeroTarjetaInterno + evento.data;
  }
  if (evento.inputType === "deleteContentBackward") {
    numeroTarjetaInterno = numeroTarjetaInterno.substring(0, numeroTarjetaInterno.length - 1)
  }
  if (evento.inputType === "insertFromPaste") {
    numeroTarjetaInterno = entradaTarjeta.value
  }

  entradaTarjeta.value = validator.maskify(numeroTarjetaInterno)

  if (entradaTarjeta.value.length > 16) { //si el número input es mas largo que 16
    entradaTarjeta.value = entradaTarjeta.value.slice(0, 16); // entonces el valor del número input es igual al 3 números
  }

}
//EN EL SIGUIENTE BLOQUE DE CODIGO HAGO QUE AL HACER CLIC EN EL BOTON ACEPTAR SALGA EL AVISO CORRESPONDIENTE:
function validarNumero(evento) {
  evento.preventDefault()//evita que la página se refresque (por ser form)
  const name = document.getElementById("name").value;
  const numberCard = document.getElementById("numberCard").value;
  const caducidad = document.getElementById("caducidad").value;
  const cajitacvc = document.getElementById("cajitacvc").value;
  if (name === "" || numberCard === "" || caducidad === "" || cajitacvc === "") {
    alert('Todos los campos deben ser diligenciados');
  } else {
    if (validator.isValid(numeroTarjetaInterno)) { //si el número de tarjeta es válido
      const modalTarjeta = document.getElementById("modal-tarjeta")
      const mensajeTarjeta = document.getElementById("mensaje-tarjeta");
      const cerrarModalTarjeta = document.getElementsByClassName("cerrar-modal-tarjeta")[0];

      mensajeTarjeta.innerHTML = "La tarjeta es válida";
      modalTarjeta.style.display = "block";

      cerrarModalTarjeta.onclick = function () {
        modalTarjeta.style.display = "none";
      }
      window.onclick = function (event) {
        if (event.target == modalTarjeta) {
          modalTarjeta.style.display = "none";
        }
      }
    } else {
      const modalTarjeta = document.getElementById("modal-tarjeta");
      const mensajeTarjeta = document.getElementById("mensaje-tarjeta");
      const cerrarModalTarjeta = document.getElementsByClassName("cerrar-modal-tarjeta")[0];

      mensajeTarjeta.innerHTML = "La tarjeta no es válida";
      modalTarjeta.style.display = "block";

      cerrarModalTarjeta.onclick = function () {
        modalTarjeta.style.display = "none";
      }

      window.onclick = function (event) {
        if (event.target == modalTarjeta) {
          modalTarjeta.style.display = "none";
        }
      }
    }
  }

}

//PARA LIMITAR LOS NUMEROS EN EL CVC
const numeroInput = document.getElementById("cajitacvc");//Aquí "capturé" el espacio de CVC
numeroInput.addEventListener("input", limitador); //se escucha el input y se ejecuta el limitador
function limitador() {
  if (numeroInput.value.length > 3) { //si el número input es mas largo que 16
    numeroInput.value = numeroInput.value.slice(0, 3); // entonces el valor del número input es igual al 3 números
  }
}

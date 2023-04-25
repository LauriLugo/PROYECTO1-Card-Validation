// LO QUE ESTÁ EN ESTE ARCHIVO INDEX.JS ES LO QUE SE VE EN LA PANTALLA
import validator from './validator.js';

console.log(validator);

// validator.isValid()
// validator.maskify()

// La siguiente línea 
const entradaTarjeta = document.getElementById("numberCard");
entradaTarjeta.addEventListener("input", validarYEnmascarar);

const botonAceptar = document.getElementById("aceptar")
botonAceptar.addEventListener("click", validarNumero)

let numeroTarjetaInterno = "";

function validarYEnmascarar(evento) {
  if (evento.inputType === "insertText") {
    // console.log("miau")
    // console.log(evento.data)
    numeroTarjetaInterno = numeroTarjetaInterno + evento.data;
    // console.log(numeroTarjetaInterno)
  }
  if (evento.inputType === "deleteContentBackward") {
    // console.log("prrrr")
    numeroTarjetaInterno = numeroTarjetaInterno.substring(0, numeroTarjetaInterno.length - 1)
    // console.log(numeroTarjetaInterno)
  }
  if (evento.inputType === "insertFromPaste") {
    // console.log("kijj")
    numeroTarjetaInterno = entradaTarjeta.value
    // console.log(numeroTarjetaInterno)
  }

  entradaTarjeta.value = validator.maskify(numeroTarjetaInterno)
  // console.log("hola mundo")
  // console.log(evento)
}

function validarNumero(evento) {
  evento.preventDefault()
  // console.log("algo")
  if (validator.isValid(numeroTarjetaInterno)) {
    alert("La tarjeta es válida")
  } else {
    alert("La tarjeta no es válida")
  }
}


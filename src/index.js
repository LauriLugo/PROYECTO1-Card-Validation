// LO QUE ESTÁ EN ESTE ARCHIVO INDEX.JS ES LO QUE SE VE EN LA PANTALLA
import validator from './validator.js';

console.log(validator);

// validator.isValid()
// validator.maskify()

// La siguiente línea 
const entradaTarjeta = document.getElementById("numberCard"); //aqui captura el espacio de la tarjeta
entradaTarjeta.addEventListener("input", validarYEnmascarar);//escucha el input en entradaTarjeta y ejecuta validadYEnmascarar

const botonAceptar = document.getElementById("aceptar") //aquí camptura el boton aceptar
botonAceptar.addEventListener("click", validarNumero)//escucha el clic del boton aceptar y ejecuta validar numero


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

  if (entradaTarjeta.value.length > 16) { //si el número input es mas largo que 16
    entradaTarjeta.value = entradaTarjeta.value.slice(0,16); // entonces el valor del número input es igual al 3 números
  }

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
//PARA LIMITAR LOS NUMEROS EN EL CAMPO DE LA TARJETA
const numeroCardInput = document.getElementById("numberCard");//Aquí "capturé" el espacio de 'numberCard'
numeroCardInput.addEventListener("input", limitadorCard); //se escucha el input y se ejecuta el limitador
function limitadorCard() {
  if (numnumeroCardInputeroInput.value.length <= 16) { //si el número input es mas largo que 16
    numeroCardInput.value = numeroCardInput.value.slice(0,16); // entonces el valor del número input es igual al 3 números
  }
}//PARA LIMITAR LOS NUMEROS EN EL CVC


const numeroInput = document.getElementById("cajitacvc");//Aquí "capturé" el espacio de CVC
numeroInput.addEventListener("input", limitador); //se escucha el input y se ejecuta el limitador
function limitador() {
  if (numeroInput.value.length > 3) { //si el número input es mas largo que 16
    numeroInput.value = numeroInput.value.slice(0,3); // entonces el valor del número input es igual al 3 números
  }
}

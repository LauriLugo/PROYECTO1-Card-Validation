// TODA LA LÓGICA VA EN ESTE ARCHIVO VALIDATOR.JS
const validator = {
  isValid: function (creditCardNumber) {
    //CODIGO QUE VALIDA

    //1. Tomo el número original (creditCardNumber) y lo convierto en un array o lista con las funciones .toString().split(""); (ese resultado se llamará "arrNumOriginal")
    const arrNumOriginal = creditCardNumber.toString().split("");
    //2. Reversa del número. Tomo la lista ("arrNumOriginal") y le doy reversa a los números con la función .reverse(): (ese resultado se llamará "arrNumReversa")
    const arrNumReversa = arrNumOriginal.reverse();
    //3. Doblar cada segundo dígito. 
    // Para esto hago una copia de la lista "arrNumReversa" con [...], lo cual me ayuda a editar la copia sin que se altere la original. Esta copia se llamará "arrNumDoble"
    const arrNumDoble = [...arrNumReversa];
    //luego, para doblar cada segundo dígito, tomo los números que ocupan una posición par (con 'let index') y aplico la operación:
    //el index (posición) es < la logitud de la lista "arrNumDoble" + 1 (Se suma uno al index para revisar la posicion real)
    // y esto se ubica dentro de un for para que haga la misma operación hasta la longitud de la lista (arrNumDoble) y no se convierta en un bucle infinito
    for (let index = 0; index < arrNumDoble.length; index++) {
      //El for recorre la lista arrNumDoble, comienza en el índice o posición 0 de la lista y se ejecuta mientras el índice sea menor que la longitud de la lista 'arrNumDoble' 
      //Dentro del bucle se pone la declaración if que comprueba si el valor de "index + 1" es un número par; si es así se ejecutará el bloque de código dentro del if.
      if ((index + 1) % 2 === 0) {
        //En el bloque de código del "if", el valor del elemento actual del array se multiplica por 2 y se almacena en el mismo elemento del array.
        //Se usa el módulo o residuo de 2. Si es igual a cero quiere decir que es par.
        arrNumDoble[index] = arrNumDoble[index] * 2;
        // Finalmente se multiplica por 2 el número en el index que cumpla la condición if.
      }
    }
    //4. Sumar los dígitos. Si este número es mayor o igual a 10, se debe sumar los dígitos del resultado (10->1+0)
    const arrSumaLosDigitos = [...arrNumDoble];
    //Creé una copia de la lista 'arrNumDoble' y la llamé "arrSumaLosDigitos"
    //El for recorre el array "arrSumaLosDigitos":
    for (let index = 0; index < arrSumaLosDigitos.length; index++) {
      //Ahora utilizo el if para comprobar si el valor del elemento actual del array es mayor o igual a 10:
      if (arrSumaLosDigitos[index] >= 10) {
        //verifico si el número es mayor o igual a 10, si es así, se ejecutará el bloque de código dentro del "if":
        const arrDigitos10 = arrSumaLosDigitos[index].toString().split(""); // Hago una array o lista de ese número y con split la corto
        let sumaDigitos10 = 0; //Utilizo un let para crear la variable 'sumaDigitos10' que guardará la suma de los digitos
        for (const digito10 of arrDigitos10) { //el for of recorre cada posición del array generado del numero mayor a 10
          sumaDigitos10 = sumaDigitos10 + Number(digito10); //Cada dígito se convierte de nuevo a un número mediante la función "Number()" y se suma a la variable "sumaDigitos10".
        }
        arrSumaLosDigitos[index] = sumaDigitos10; // Se reemplaza el valor original por la suma de sus dígitos.
      }
    }
    //5. Suma de los dígitos finales. El siguiente fragmento de código suma los elementos del array "arrSumaLosDigitos"
    let sumaDigitosFinales = 0; // La variable "sumaDigitosFinales" se inicia en 0:
    // En la siguiente línea se recorre cada elemento de la lista "arrSumaLosDigitos" utilizando el for of:
    for (const digito of arrSumaLosDigitos) {
      // En cada iteración del bucle, se toma el valor del elemento actual (llamado "digito") y se convierte en un número utilizando la función "Number()". *ESTE*
      //Se convierte el elemento a un número utilizando la función "Number()" y se le asigna a la variable "digito".*O ESTE*
      sumaDigitosFinales = sumaDigitosFinales + Number(digito);
    }
    //El número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.
    //Se suma "digito" a la variable "sumaDigitosFinales".
    if (sumaDigitosFinales % 10 === 0) {
      return true;
    } else {
      return false;
    }
    //Después de sumar todos los dígitos, se verifica si la suma final es divisible por 10 (es decir, si su residuo es 0). Si es así, se devuelve "true", lo que indica que el número de tarjeta de crédito es válido según el algoritmo de Luhn. Si no es así, se devuelve "false".
  },


  maskify: function (creditCardNumber) {
    //CODIGO QUE ENMASCARA
    // let num = 'helloworld';
    //Tomamos el número y lo convertimos en un array
    const arrNumOriginal = creditCardNumber.toString().split("");
    const arrResultado = [...arrNumOriginal];
    //Ocultar valores
    if (arrResultado.length > 4) {
      for (let index = 0; index < arrResultado.length; index++) {
        if (arrResultado.length - index > 4) {
          arrResultado[index] = "#";
        }
      }
    }
    const resultado = arrResultado.join("");
    return resultado
  }
};

export default validator;

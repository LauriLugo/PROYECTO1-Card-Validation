const validator = {
  isValid: function (creditCardNumber) {
    // console.log('Voy a validar la siguiente tarjeta:' + creditCardNumber)
    //CODIGO QUE VALIDA
    //Tomamos el nuemro y lo convertimos en un array
    const arrNumOriginal = creditCardNumber.toString().split("");
    // console.log(`arrNumOriginal: ${arrNumOriginal}`);
    //Reversa del número
    const arrNumReversa = arrNumOriginal.reverse();
    // console.log(`arrNumReversa: ${arrNumReversa}`);
    //'a todos los números que ocupan una posición par se les debe multiplicar por dos'
    const arrNumDoble = [...arrNumReversa];
    for (let index = 0; index < arrNumDoble.length; index++) {
      //Se suma uno al index para revisar la posicion real
      if ((index + 1) % 2 === 0) {
        //Se usa el módulo o residuo de 2, si es igual a cero quiere decir que es par.
        arrNumDoble[index] = arrNumDoble[index] * 2; // multiplicamos por 2 el número en el index que cumpla la condición
      }
    }
    // console.log(`arrNumDoble: ${arrNumDoble}`);
    //'si este número es mayor o igual a 10, debemos sumar los dígitos del resultado'
    const arrSumaLosDigitos = [...arrNumDoble];
    for (let index = 0; index < arrSumaLosDigitos.length; index++) {
      if (arrSumaLosDigitos[index] >= 10) {
        //verificamos si el número es mayor o igual a 10
        const arrDigitos10 = arrSumaLosDigitos[index].toString().split(""); // obtenemos el Array de ese nuemro
        let sumaDigitos10 = 0; //Inicializamos una letiable para guardar la suma de los digitos
        for (const digito10 of arrDigitos10) {
          //recorremos cada posicion del array generado del numero mayor a 10
          sumaDigitos10 = sumaDigitos10 + Number(digito10); //Sumamos el digito en la letiable suma
        }
        arrSumaLosDigitos[index] = sumaDigitos10; // reemplazamos la posición en el array por el resultado de la suma
      }
    }
    // console.log(`arrSumaLosDigitos: ${arrSumaLosDigitos}`);
    //Se realiza la suma de los digitos finales
    let sumaDigitosFinales = 0;
    for (const digito of arrSumaLosDigitos) {
      sumaDigitosFinales = sumaDigitosFinales + Number(digito);
    }
    // console.log(`sumaDigitosFinales: ${sumaDigitosFinales}`);
    //El número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.
    if (sumaDigitosFinales % 10 === 0) {
      // console.log("Si es Válido");
      return true;
    } else {
      return false;
      // console.log("No es Válido");
    }
  },


  maskify: function (creditCardNumber) {
    // console.log('Voy a enmascarar los números de esta tarjeta:' + creditCardNumber)
    //CODIGO QUE ENMASCARA
    // let num = 'helloworld';
    //Tomamos el nuemro y lo convertimos en un array
    const arrNumOriginal = creditCardNumber.toString().split("");
    // console.log(`arrNumOriginal: ${arrNumOriginal}`);
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
    // console.log(`resultado: ${resultado}`);
    return resultado
  }
};

//asi utilizo mis funciones en index.js
validator.isValid('12345')
validator.maskify('12345')


//centrarme en una funcion: isValid o maskify

export default validator;

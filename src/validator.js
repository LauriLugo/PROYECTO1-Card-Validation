const validator = {
  isValid: function (creditCardNumber) {
    console.log('Voy a validar la siguiente tarjeta:' + creditCardNumber)
    //CODIGO QUE VALIDA

  },


  maskify: function (creditCardNumber) {
    console.log('Voy a enmascarar los números de esta tarjeta:' + creditCardNumber)
    //CODIGO QUE ENMASCARA
    // var num = 'helloworld';
    //Tomamos el nuemro y lo convertimos en un array
    var arrNumOriginal = creditCardNumber.toString().split("");
    console.log(`arrNumOriginal: ${arrNumOriginal}`);
    var arrResultado = [...arrNumOriginal];
    //Ocultar valores
    if (arrResultado.length > 4) {
      for (let index = 0; index < arrResultado.length; index++) {
        if (arrResultado.length - index > 4) {
          arrResultado[index] = "#";
        }
      }
    }
    var resultado = arrResultado.join("");
    console.log(`resultado: ${resultado}`);
    return resultado
  }
};

//asi utilizo mis funciones en index.js
validator.isValid('12345')
validator.maskify('12345')


//centrarme en una funcion: isValid o maskify

export default validator;

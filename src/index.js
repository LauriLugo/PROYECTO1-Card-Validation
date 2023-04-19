import validator from './validator.js';

// console.log(validator);

validator.isValid()
validator.maskify()

var texto = document.getElementById("numberCard");
texto.value = "green";

function mascara() {
    document.getElementById("numberCard").value = "1231232432435"
}
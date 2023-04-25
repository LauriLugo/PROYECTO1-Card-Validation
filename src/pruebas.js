var numeros = 48856738
// console.log(numeros) // para correr ctrl+alt+N
var lista = numeros.toString().split('')
// console.log(lista)// para correr ctrl+alt+N
lista[0] = Number(lista[0]) + 1
lista[1] = Number(lista[1]) + 1
lista[2] = Number(lista[2]) + 1
lista[3] = Number(lista[3]) + 1
lista[4] = Number(lista[4]) + 1
lista[5] = Number(lista[5]) + 1
lista[6] = Number(lista[6]) + 1
lista[7] = Number(lista[7]) + 1
// console.log(lista)// para correr ctrl+alt+N
var unirNumeros = lista.join('')
// console.log(unirNumeros)// para correr ctrl+alt+N
var sumaNumerosUnidos = Number(lista[0]) + Number(lista[1]) + Number(lista[2]) + Number(lista[3]) + Number(lista[4]) + Number(lista[5]) + Number(lista[6]) + Number(lista[7])
// console.log(sumaNumerosUnidos)// para correr ctrl+alt+N
console.log('-----------------------------------------------------------')
// Reemplazaré lo anterior con un FOR en un nuevo ejemplo:
var numbers = 98097764
var listaNumbers = numbers.toString().split('')
console.log("listaNumbers: " + listaNumbers)// para correr ctrl+alt+N
// AHORA HARÉ LAS LINEAS 5 A LA 12 PERO EN UN FOR
// escribo for y selecciono el cuadrito, ese cuadrito me hace la estructura del for automáticamente
// reemplazé el "index" por "posicion" (desde 0...) 
//y el 'array' por mi lista ("listaNumbers")
for (let posicion = 0; posicion < listaNumbers.length; posicion++) {
  // const element = listaNumbers[posicion];
  // console.log(element)
  // console.log("listaNumbers[" + posicion + "] = " + element + ";")
  // console.log(`listaNumbers[${posicion}] = ${listaNumbers[posicion]};`)
  console.log(`posicion = ${posicion}`)
  console.log(`posicion + 1 = ${posicion + 1}`)
  console.log(`posicion es par? = ${(posicion + 1) % 2 === 0}`)
  listaNumbers[posicion] = Number(listaNumbers[posicion]) + 1
  console.log("listaNumbers: " + listaNumbers)// para correr ctrl+alt+N
}
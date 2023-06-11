const numeros = 48856738
const lista = numeros.toString().split('')
lista[0] = Number(lista[0]) + 1
lista[1] = Number(lista[1]) + 1
lista[2] = Number(lista[2]) + 1
lista[3] = Number(lista[3]) + 1
lista[4] = Number(lista[4]) + 1
lista[5] = Number(lista[5]) + 1
lista[6] = Number(lista[6]) + 1
lista[7] = Number(lista[7]) + 1
const unirNumeros = lista.join('')
const sumaNumerosUnidos = Number(lista[0]) + Number(lista[1]) + Number(lista[2]) + Number(lista[3]) + Number(lista[4]) + Number(lista[5]) + Number(lista[6]) + Number(lista[7])
const numbers = 98097764
const listaNumbers = numbers.toString().split('')
// AHORA HARÉ LAS LINEAS 5 A LA 12 PERO EN UN FOR
// escribo for y selecciono el cuadrito, ese cuadrito me hace la estructura del for automáticamente
// reemplazé el "index" por "posicion" (desde 0...) 
//y el 'array' por mi lista ("listaNumbers")
for (let posicion = 0; posicion < listaNumbers.length; posicion++) {
  listaNumbers[posicion] = Number(listaNumbers[posicion]) + 1
}
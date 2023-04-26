# Tarjeta de crédito válida

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Definición del producto](#2-definición-del-producto)
* [3. Consideraciones generales](#3-consideraciones-generales)
* [4. Conclusiones](#4-conclusiones)


***

## 1. Resumen del proyecto

Para este proyecto se elaboró una aplicación web que permite a un usuario validar el número de una tarjeta de crédito. 

En el desarrollo de esta validación se implementó el [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn), también llamado algoritmo de módulo 10, el cual es un método de suma de verificación; este se utiliza para validar números de identificación; tales como el IMEI de los celulares, tarjetas de crédito, etc.

Su desarrollo es simple: obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9]); luego, a todos los números que ocupan una posición par se les multiplica por dos; si este número es mayor o igual a 10, debemos sumar los dígitos del resultado. Finalmente el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://user-images.githubusercontent.com/12631491/217016579-865679e0-0949-4afd-b13f-d2ebba7a0c54.png)

## 2. Definición del producto

Esta aplicación web simula una interfaz de comercio online especializado en perfumería femenina de alta gama, donde las principales usuarias son mujeres mayores de edad, de clase media-alta y titulares de una o más tarjetas de crédito. 

El objetivo general de esta población es adquirir el perfume de su interés a través de la tarjeta de crédito como método de pago. La aplicación creada y desarrollada facilita a las usuarias obtener el producto final (perfume) de su preferencia al permitir la transacción financiera con la tarjeta de crédito si esta resulta ser válida para dicho proceso.  

***

Respecto a la experiencia del usuario, se implementaron dos pantallas: 
1. Pantalla inicial:  en la que se evidencia una imagen de fondo con temática ecommerce tomada de [dribbble.com](https://dribbble.com/shots/5408295-Beauty-Shop-Product-Details-Page), una ventana con el mensaje `"Elegiste crédito como medio de pago"` `"Para continuar con tu transacción ingresa los datos de tu tarjeta de crédito"` y el botón `'siguiente'` que lleva a la validación (segunda pantalla):

![image](https://user-images.githubusercontent.com/129604876/234459035-d1766d6f-a88f-47a2-8165-e0d9b17e0c99.png)

2. Segunda pantalla: la imagen de fondo permanece pero una nueva ventana aparece; en esta, el usuario deberá diligenciar cada uno de los campos de acuerdo a la información de su trajeta de crédito:

![image](https://user-images.githubusercontent.com/129604876/234461954-09873573-54b9-4d84-a5df-dc70452f8f55.png)

3. Al hacer clic en el botón `'aceptar'` aparecerá una ventana que indica si la tarjeta de crédito es o no válida para realizar la compra:

![image](https://user-images.githubusercontent.com/129604876/234463353-ab09c148-8309-4ece-b701-5a340905ee2f.png)

***

La implementación de las pantallas, de las explicaciones, mensajes, colores y demás características, fueron diseñadas buscando crear un espacio ameno y visualmente atractivo para los usuarios. En ningún momento durante el desarrollo de esta aplicación se usaron librerías o frameworks, todo se elaboró completamente en JavaScript puro.

## 3. Consideraciones generales

En esta aplicación web se ejecutan diferentes funcionalidades:
* La interfaz desarrollada permite al usuario insertar un numero (texto) a validar usando solo caracteres numéricos (dígitos) [0-9].  
* La interfaz desarrollada permite al usuario ocultar todos los dígitos del número de tarjeta a exepción de los últimos 4 caracteres.  
* La interfaz desarrollada permite al usuario conocer si el resultado es válido o no.  
* La interfaz desarrollada no permite al usuario poder ingresar un campo vacío.  

Para el desarrollo de este proyecto se trabajó en los fundamentos de JavaScript, incluyendo conceptos como variables, condicionales, y funciones, así como eventos y manipulación básica del DOM, fundamentos de HTML y CSS. 

## 4. Conclusiones

* Se trabajó en base a un boilerplate, la estructura básica de un proyecto en distintas carpetas (a través modulos en JS).
* Se conocieron las herramientas de mantenimiento y mejora del código (linters y pruebas unitarias).
* Se aprendió sobre objetos, estructuras, métodos e iteración (bucles) en JavaScript.
* Se implementó control de versiones con git (y la plataforma github).
* Se buscó diseñar y desarrollar una aplicación centrada en el usuario con un prototipo de alta fidelidad que incluya interacciones.

let nombre1=prompt('Ingresar nombre')
let edad1=prompt('Ingresar edad')
let nombre2=prompt('Ingresar un segundo nombre ')
let edad2=prompt('Ingresar una segunda edad')
let nombre3=prompt('Ingresar un tercer nombre ')
let edad3=prompt('Ingresar una tercera edad')

let respuesta= Math.max(edad1, edad2, edad3)

if(respuesta = edad1){
    document.write('El mayor de los 3 es:' + nombre1)
} else if (respuesta= edad2){
    document.write('El mayor de los 3 es:' + nombre2)
} else if (respuesta= edad3){
    document.write('El mayor de los 3 es:' + nombre3)
}


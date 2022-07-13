// pedir al usuario filas y un numero de columnas
//dibujar una tabla
//cada celda debe tener un numero descendente de multiplicar filas por columnas

const filas = parseInt(prompt("Ingresar un numero de filas"));
const columnas = parseInt(prompt("Ingresar un numero de columnas"));
let resultado = filas * columnas;

document.write(`<table> <tbody>`);

for(let indiceFila = 0; indiceFila < filas; indiceFila++){
     document.write(`<tr>`)

     for(let indiceColumna=0; indiceColumna< columnas; indiceColumna++){
         document.write(` <td>` + resultado + `</td>` )
        resultado--;}
         //document.write(` <td>$[resultado]</td>` )}
//       
       
         document.write(`</tr>`)
}

document.write(`</tbody> </table>`);

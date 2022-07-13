//pedir cadena de texto
//devolverlo al reves

let texto = prompt('Ingresar texto');
let resultado = '';

for(let i = texto.length - 1; i>=0; i--){
   resultado = resultado + texto.charAt(i);
}
document.write(resultado);
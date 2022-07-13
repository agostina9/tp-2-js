//pedir una cadena de texto hasta pulsar cancelar
//al salir con cancelar debe mostrarse las cadenas concatenadas con un -
let texto = "";

do{
  let cadena = prompt('Introducir un mensaje');
  if(texto == ""){
    texto= texto+cadena;
  }
  else{
    texto = texto + '-'+ cadena
  }
}
while(confirm('Desea seguir guardando texto?'));
document.write(texto);
//pedir num 
//cuando presione cancelar si no es numero hacer alert y seguir pidiendo numeror
//al poner cancelar indicar la suma de los numeros introducidos

let suma = "";

do{
    let numero = parseInt(prompt('Ingresar un numero'))
    console.log(numero);
    console.log(suma);

    if(suma == ""){
        suma = suma + numero;
    }
    else{
        if(numero !== numero){
            alert( 'No es un numero valido');
        }
    }
} while(confirm('ingresar otro numero'));
document.write(suma)


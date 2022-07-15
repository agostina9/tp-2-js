let numerousuario = parseInt(prompt('Ingresar un numero menor a 50'));
console.log(numerousuario);

let numero=0
let repeticion=1

if( numerousuario > 0 && numerousuario<=50){
    for( numero; numero <= numerousuario; numero++){
        for( repeticion = 1; repeticion<=numero; repeticion++){
            document.write(repeticion)
        }
        document.write('<br>')
    }
} 
else{
    alert("Ingresar numero menor a 50")
}
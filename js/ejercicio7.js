let numerousuario = parseInt(prompt('Ingresar un numero menor a 50'))

if( numerousuario > 0 && numerousuario<=50){
    for(let numero = numerousuario; numero >=1; numero--){
        for(let repeticion = numero; repeticion>=1; repeticion--){
            document.write(numero)
        }
        document.write('<br>')
    }
} 
else{
    alert("Ingresar numero menor a 50")
}
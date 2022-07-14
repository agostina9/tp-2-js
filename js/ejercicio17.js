//pedir texto
//mostrar primera vocal

let frase= prompt('Ingresar texto');
frase=frase.toLocaleLowerCase();

for(let i=0; i < frase.length; i++){
    if(frase.charAt(i) === 'a' || frase.charAt(i) === 'e' || frase.charAt(i) === 'i' || 
frase.charAt(i) === 'o' || frase.charAt(i) === 'u') {
    document.write('La primera vocal del texto es:' + frase.charAt(i))
    frase++
}
}

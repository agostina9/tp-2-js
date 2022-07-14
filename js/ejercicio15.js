let texto = prompt('Ingresar un texto');

totalvocales = 0;

for( let i = 0; i < texto.length ; i++){
    let vocal = texto.charAt(i);
    if((vocal=='A') || (vocal=='a') || (vocal=='E') || (vocal=='e')|| (vocal=='I') ||(vocal=='i') 
    || (vocal=='o') || (vocal=='O') || (vocal=='U') || (vocal=='u') )
   totalvocales++;
}
document.write('Numero de vocales del texto intoducido : ' + totalvocales);


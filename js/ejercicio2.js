//solicitar una nota del 0 al 10
//mostrar en un alert segun los sig rangos
/* 0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

*/
//si es un num mayor a 10- mostrar un mensaje de "numero erroneo" 
//mostrar un mensaje "introduce num valido"

let nota = parseInt(prompt('Ingresar una nota del 0 al 10'));

switch (nota){
    case 0: 
    case 1:
    case 2:
    alert('Muy deficiente');
    break;
    case 3:
    case 4:
        alert('Insuficiente');
        break;
    case 5:
    case 6:
        alert('Suficiente');
        break;
    case 7:
        alert('Bien');
        break;
    case 8:
    case 9:
        alert('Notable');
        break;
    case 10:
        alert('Sobresaliente');
        break;
    default: 
    alert('Numero erroneo');
    document.write('Introducir numero valido')
       

}

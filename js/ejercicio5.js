//ingresar un dni entre 0 y 999999
//calcular el resto de la division entera entre el numero y el numero 23
//el resultdado 0 a 22, corresponde a una de las siguientes letras  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 

//si el dni cargado no es un numero mostrar con un alert
//repetir todo el proceso hasta que el usuario presione cancelar




let resultado = numero % 23;  

do{
    let numero = parseInt(prompt('Ingresar un numero de DNI, entre 0 y 99999999')); 
    
    if( numero >= 0 && numero <=99999999){
        let resultado = numero % 23;  
    }

    switch (resultado){
        case 0:
            document.write('la letra que corresponde a su DNI es la T')
            break;
        case 1:
            document.write('la letra que corresponde a su DNI es la R')
            break;
        case 2:
            document.write('la letra que corresponde a su DNI es la W')
            break;
        case 3:
            document.write('la letra que corresponde a su DNI es la A')
            break;
        case 4:
            document.write('la letra que corresponde a su DNI es la G')
            break;
        case 5:
            document.write('la letra que corresponde a su DNI es la M')
            break;
        case 6:
            document.write('la letra que corresponde a su DNI es la Y')
            break;
        case 7:
            document.write('la letra que corresponde a su DNI es la P')
            break;
        case 8:
            document.write('la letra que corresponde a su DNI es la D')
            break;
        case 9:
            document.write('la letra que corresponde a su DNI es la X')
            break;
        case 10:
            document.write('la letra que corresponde a su DNI es la B')
            break;
        case 11:
            document.write('la letra que corresponde a su DNI es la N')
            break;
        case 12:
            document.write('la letra que corresponde a su DNI es la J')
            break;
        case 13:
            document.write('la letra que corresponde a su DNI es la Z')
            break;
        case 14:
            document.write('la letra que corresponde a su DNI es la S')
            break;
        case 15:
            document.write('la letra que corresponde a su DNI es la Q')
            break;
        case 16:
            document.write('la letra que corresponde a su DNI es la V')
            break;
        case 17:
            document.write('la letra que corresponde a su DNI es la H')
            break;
        case 18:
            document.write('la letra que corresponde a su DNI es la L')
            break;
        case 19:
            document.write('la letra que corresponde a su DNI es la C')
            break;
        case 20:
            document.write('la letra que corresponde a su DNI es la K')
            break;
        case 21:
            document.write('la letra que corresponde a su DNI es la E')
            break;
            default: alert('ingreso una opcion erronea')
    } 
 }

while(confirm('¿Desea ingresar un DNI'))






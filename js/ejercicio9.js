//script con numeros del 1 al 500
//indiccarr cuales son multiplos de 4 y 9
//cada 5 lineas mostrar una linea


for(let n = 1; n<=500; n++){
    document.write(n +  '<br>')
    if ((n%4)==0  ){
        document.write( 'Multipo de 4 <br>')
    }else if ( (n%9)==0){
        document.write('Multiplo de 9 <br>')
    }else if ( (n%5)==0){
        document.write( '--------------------------------- <br>')
    }
}
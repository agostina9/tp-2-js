function aleatorio(max, min){
    return parseInt(Math.random()* (max, min))
}
console.log(aleatorio(1,99))
document.write('Numero aleatorio entre 1 y 99:' + aleatorio(1,99))
var lista = new Array;
for (let i = 1; i <= 100; i++) {
    if ((i % 2) == 0) {
        lista.push(i);
    }
}
function busquedaBinaria(value, lista){
    let primero = 0;
    let ultimo = lista.length -1;
    let posicion = -1;
    let encontro = false;
    let medio;

    while(encontro === false && primero <= ultimo){
        medio = Math.floor((primero + ultimo)/2);
        if (lista[medio] == value){
            encontro = true;
            posicion = medio;
        } else if (lista[medio] > value){
            ultimo = medio -1;
        } else{
            primero = medio +1;
        }
    }
    return posicion;
}
let value = 100
console.log(lista)
console.log(`El numero a buscar es: ${value}, y se encontro en la posicion ${busquedaBinaria(value, lista)}`);


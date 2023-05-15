var arreglo = ["Maria","Rosa","Daniel","Sergio"];

function recorrer(nombre){
    console.log(`Hola, ${nombre}`);
}

for (var i=0; i<arreglo.length; i++){
    recorrer(arreglo[i]);
}

for(var posicion of arrelgo){
    recorrer(posicion);
}

while(arreglo.length > 0){
    nombre = arreglo.shift();
    recorrer(nombre);
}


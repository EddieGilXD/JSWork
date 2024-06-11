function sumarPuntos (punto1, punto2) {
    
    this.punto1 = punto1;
    this.punto2 = punto2;     
    this.sumar = function (){
        punto1 = punto1 + punto1;
    }
}

function asignarCoordenada(x, y){
    this.x = x;
    this.y = y;
}
const punto1 = {x : 4, y : 9};
const punto2 = {x : 2, y : 1};

asignarCoordenada.apply(punto1, [6, 5]);
asignarCoordenada.apply(punto2, [4,2]);
console.log(punto1);
console.log(punto2);

sumarPuntos.apply(punto1, [punto1.x, punto2.x]);
punto1.sumar();
console.log(punto1)


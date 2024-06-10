function extenderPunto(dx, dy) {
    this.dx = dx;
    this.dy = dy;
    this.dibujar = function() {
        console.log("Dibujando punto en posicio dx:" + dx + " y dy:" + dy);
    }
    this.mover = function(dx, dy){
        this.dx = dx;
        this.dy = dy; 
        this.informar(this.dx, this.dy);
    }
    this.informar = function(dx, dy) {
        console.log("El punto se ha movido a la posicion dx: " + dx + " dy: " + dy);
    }
}

const punto = {dx : 4, dy : 9}
console.log(punto);

extenderPunto.call(punto, 5,6);
console.log(punto);

punto.dibujar();
punto.mover(15, 16);
console.log(punto);

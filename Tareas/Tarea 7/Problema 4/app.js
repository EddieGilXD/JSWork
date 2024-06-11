function moverPunto(dx, dy) {
    this.dx = dx;
    this.dy = dy;
    
    this.dibujar = function (dx, dy) {
        this.dx = dx;
        this.dy = dy;
        console.log("El punto esta localizado en dx: " + dx + " dy: " + dy);
    }
    this.mover = function(dx, dy){
        this.dx = dx;
        this.dy = dy;
        this.informar(this.dx, this.dy);
    }
    this.informar = function(dx, dy) {
        this.dx = dx;
        this.dy = dy;
        console.log("El punto se movia a dx: " + dx + " dy: " + dy);
    }
}

let punto = {dx : 12};
console.log(punto);

moverPunto.apply(punto, [14, 20]);
console.log(punto);

punto.dibujar(80, 50);
punto.mover(3,2);


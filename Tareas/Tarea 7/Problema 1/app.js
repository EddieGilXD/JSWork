function moverPunto(dx, dy){
    this.dx = dx;
    this.dy = dy;
    this.mover = function(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }
}

const punto = {dx : 3, dy : 4};
moverPunto.call(punto, 5,6);
console.log(punto);

punto.mover(7,8);
console.log(punto);
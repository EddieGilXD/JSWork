let enemy = true; 

if (enemy == true) {
    enemigoIdentificado();
}else{
    console.log("Esperando Enemigo");
}

function enemigoIdentificado() {
    let enemy1 = prompt("Ingrese el nombre del primer enemigo:");
    let dist1 = parseFloat(prompt("Ingrese la distancia del primer enemigo:"));
    let enemy2 = prompt("Ingrese el nombre del segundo enemigo:");
    let dist2 = parseFloat(prompt("Ingrese la distancia del segundo enemigo:"));   
    
    if (dist1 === dist2) {
        console.log(enemy1);
    } else if (dist1 < dist2){
        console.log(enemy1);
    } else {
        console.log(enemy2)
    }
}
let enemy = true; 

if (enemy == true) {
    enemigoIdentificado();
}else{
    console.log("Esperando Enemigo");
}

function enemigoIdentificado() {    
    let enemy1 = prompt("Ingrese el nombre del primer enemigo:");
    let enemy2 = prompt("Ingrese el nombre del segundo enemigo:");
    let comparaciones = prompt("Ingresa cantidad de comparaciones a realizar")
    let contador = 1;
    while (contador <= comparaciones) {
        let dist1 = parseFloat(prompt("Ingrese la distancia del enemigo: " + enemy1));
        let prioridad1 = parseFloat(prompt("Ingresa la prioridad del enemigo " + enemy1))
        let dist2 = parseFloat(prompt("Ingrese la distancia del enemigo: " + enemy2));
        let prioridad2 = parseFloat(prompt("Ingresa la prioridad del enemigo " + enemy2))

        
        if (prioridad1 == prioridad2){
            if (dist1 === dist2) {
                console.log(enemy1 + " Aparecio primero fuego a discrecion");
            } else if (dist1 < dist2){
                console.log(enemy1 + " Esta a: " + dist1 + " Metros");
            } else {
                console.log(enemy2 + " GatoEsta a: " + dist2 + " Metros")
            }
        } else if (prioridad1 > prioridad2) {
            console.log("Disparar al objeto con mayo prioridad: " + enemy1 )
        } else {
            console
        }

        contador ++; 
    }        
}
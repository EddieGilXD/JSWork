var EnemyA = {
    dist1: 10
}

var Enemyb = {
    dist2: 20
}

function enemigoMasSercano(dist1, dist2){
    if(dist1 < dist2){
        console.log("EnemyA esta mas serca que EnemyB la distancia es de: " + dist1)
    } else {
        console.log("Enemyb Esta mas serca la distancia es de: " + dist2)
    }
}

enemigoSercano = enemigoMasSercano(EnemyA.dist1, Enemyb.dist2)


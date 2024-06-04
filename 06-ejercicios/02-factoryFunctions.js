
//Ahora utiliza una factory function para crear a los usuarios

function createUsuario(name) { //¿De qué manera fueron creados los objetos en este ejemplo?
    return{                   //¿Por qué utilizamos este return{}?
        id: Math.random(),    //¿Qué es Math?   ¿Qué hace Math.random()?
        name,

    };


}

let user = createUsuario('Anna');
let user2 = createUsuario('Cinthia');
console.log(user,user2);
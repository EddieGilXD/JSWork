
//Realiza un programa que cree usuarios y les asigne de manera random un número de id

function Usuario(name){ // ¿Por qué la U en Usuarios es mayúscula?
    this.id = Math.random(); // ¿Para qué utilizamos this. ?
    this.name = name;       //  ¿en la línea 6, son los name la misma cosa?

}

let user = new Usuario('Anna'); //¿Para qué utilizamos la palabra reservada new?
let user2 = new Usuario('Cinthia');
console.log(user,user2)        //¿De qué manera fueron creados los objetos en este código?
//Crea un código que tome un objeto y agregue un id de manera aleatoria

let objeto = { name : "Ada"};

function agregarId(obj) {
    if (typeof (obj) === 'object') {
        obj.id = Math.random();

    }
    return obj;

}

agregarId(objeto);
console.log(objeto);
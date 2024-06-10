

/**
 * Las **funciones en JavaScript** son bloques de código diseñados para realizar una tarea específica.
 * 
 *      Se consideran uno de los ELEMENTOS FUNDAMENTALES del lenguaje, permitiendo MODULARIZAR el código, 
 * REUTILIZARLO y ORGANIZARLO de manera más eficiente y legible.
 * 
 * ¿Cómo se consideran?
 * En JavaScript, las funciones se consideran **CIUDADANOS/OBJETOS DE PRIMERA CLASE**.  Esto significa
 * que pueden ser tratadas como cualquier otro valor  en el lenguaje.  En otras palabaras, las 
 * funciones pueden:
 * 
        - Ser asignadas a variables.
        - Pasarse como argumentos a otras funciones.
        - Ser retornadas por otras funciones.
        - Tener propiedades y métodos como cualquier otro objeto.
 */


// 1. Ejemplo de función asignada a una variable **********************************************************************************

const saludo = function(nombre) {  // asignamos la función a la variable saludo
  return `Hola, ${nombre}!`;
}

console.log(saludo("Jose"));


//Las funciones también son objetos



function User(nombre) {  // esta es nuestra función constructora
    this.nombre = nombre;
}

console.log(User.name); //propiedad que nos devuelve el nombre de la función, como puedes ver las funciones tienen propiedades 4.
console.log(User.length); //propiedad que nos devuelve la cantidad de argumentos que recibe una función. 4.

const U = User;  //Tomando la función y asignarla a una variable
let user = new U('Luis'); //definiendo un usuario y crearlo en base a la referencia de la función U <--- User
console.log('"Usuario creado a partir de la función de User"',user);

//2. Pasar las funciones como argumentos********************************************************************************************

function of(Fn, arg) {     // Fn es un argumento que recibe a User, y el agumento arg recibe a Daniela, esto viene de la línea 51
    return new Fn(arg);    // retornara la función Fn(User) con el argumento "Daniela", con new creamos una nueva instancia de un objeto 
                           // a partir del constructor
}

let user1 = of(User, "Daniela");  //User es la función constructora
console.log(user1);


//3. Retornadas por otras funciones

function retornada(){
  return function(){ //función anónima
    console.log("Me retornan");

  }
}

let saludoRetornada = retornada();
saludoRetornada();

//.valueof() es un método


/** Preguntas
 * ¿Cómo se consideran las funciones en JavaScript?
 * ¿A los ciudadanos de primera clase se les permite...?
 * ¿Para qué utilizamos new?
 */
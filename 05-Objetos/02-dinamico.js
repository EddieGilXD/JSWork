
/**
 * En JavaScript los objetos son DINÁMICOS, 
 * lo que significa que es posible agregar o eliminar propiedades
 * y cambiar su valor
 */

const user = { id: 1};  // a las variables declaradas como const no es posible asignarle otro valor, pero...

user.name = 'Paola';

console.log('Soy el objeto user, con la nueva propiedad', user);

user.leerPropiedad_name = function () { // recuerda que esta función es llamda anónima y hace referencia a .leerPropiedad_name
    console.log('Leyendo la  propiedad name: ', user.name);
}

user.leerPropiedad_name();
console.log(user);

console.log('Ahora cambiaremos cosas del objeto user');



/**  user = 1; , te mostraría un error, debido a que user es declarado con const, 
 * pero  es posible cambiar y eliminar propiedades a los objetos y a los array,
 * lo que no podemos hacer es que deje de ser un objeto.
*/

//Sigamos cambiando cosas, recuerda que los objetos son dinámicos

delete user.name;
delete user.leerPropiedad_name;
console.log('Soy user después de delete atributos y métodos', user);

//SI fuera necesario que el objeto no se pueda modificar, debemos utilizar el método freeze
console.log('Utilizando .freeze');
const user1 = Object.freeze({id: 1});
user1.name = 'Karla';
delete user1.id;
console.log('Creo que no puedo tener un nombre, \nno puedes agregar una propiedad',user1);
alert('Aunque intentes ponerme un nombre (proiedad name), yo soy id :1');

//Si es necesario cambiar valores, pero no agregarle o quitarle propiedades utilizamos
console.log('Utilizando .seal');
const user2 = Object.seal({id: 1});
console.log('Soy user2',user2);
user2.name = 'Karla';
user2.id = 2
console.log('Creo que no puedo tener un nombre, \nno puedes agregar una propiedad \npero si cambiar el valor a la propiedad',user2);
alert('Pero si puedes cambiar el valor, yo soy id :2');

/**
 * El dinamismo de un objeto en el contexto de la programación orientada a objetos se refiere a la 
 * capacidad de los objetos de cambiar su estructura o comportamiento durante la ejecución del programa.
 *  Esto significa que los objetos pueden adquirir
 *  nuevos atributos o métodos, modificar los existentes o incluso eliminarlos en tiempo de ejecución.

        La capacidad de un objeto de ser dinámico es fundamental en lenguajes de programación orientados a objetos como JavaScript, 
    donde los objetos pueden ser modificados de forma flexible y adaptarse a diferentes situaciones.

    Por ejemplo, puedes agregar nuevas propiedades a un objeto JavaScript en cualquier momento, lo que lo hace dinámico y 
    flexible en la manipulación de datos y comportamientos.
 */

    /**      PREGUNTAS        
     * ¿Qué es el dinamismo en OOP?
    */
    
/**
 * Las **factory functions** en JavaScript son simplemente funciones que crean y devuelven un objeto.
 *  La idea detrás de una factory function es que se puede utilizar para crear múltiples instancias de 
 * objetos similares sin necesidad de utilizar la palabra clave `new` o definir clases. 
 * Esto puede ser particularmente útil cuando se trabaja con objetos que comparten la misma estructura pero
 *  tienen diferentes valores en sus propiedades.
 */

//Definamos objetos de manera repetitiva ***********************************

let user0 = {
    id: 0,
    email: 'paola@company.ru',
    name: 'Paola',
    estado: true,
    recuperarClave: function () {
        console.log('recuperando clave...');
    }
};

let user1 = {
    id: 1,
    email: 'karla@company.ru',
    name: 'Karla',
    estado: false,
    recuperarClave: function () {
        console.log('recuperando clave...');
    }
}
// sigamos tecleando, son mil usuarios, no...***************************************** se esta volviendo repetitivo
// utilizando factory functions para crear a user3 y user4

function createUser(id, email, name, status){  // Esta es nuestra fábrica de objetos
    return {
        id: id,
        email: email,    // es posible email únicamente
        name: name,
        status: status,
        recuperarClave: function () {
            console.log('Recuperando clave...');
        },
    };
}

let user3 = createUser(3, 'eduardo@company.ru', 'Eduardo', false );
let user4 = createUser(4, 'lorena@company.ru', 'Lorena', true );

console.log(user3);
console.log(user4);

//estudia, analiza, ejercitate


function crearPersona(nombre, edad) {//utiliza camelCase y la palabra crear o create al inicio del identificador de la función
    return {
      nombre: nombre,
      edad: edad,
      hablar: function() {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
      }
    };
  }
  
  // Crear dos objetos persona diferentes utilizando la misma factory function
  const persona1 = crearPersona("Juan", 30);
  const persona2 = crearPersona("Ana", 25);
  
  // Llamando al método hablar de cada persona
  persona1.hablar();
  persona2.hablar();


  //Permiten crear objetos de manera sencilla y no repetitiva

/**    PREGUNTAS
 * ¿Qué es una factory function ?
 */
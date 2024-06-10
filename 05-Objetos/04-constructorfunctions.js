

// Un **constructor function** en JavaScript es una función especial que se utiliza para crear e inicializar un objeto.
//  La convención es nombrar estas funciones con la primera letra en mayúscula. Cuando se utiliza la palabra clave `new` 
//  para invocar una constructor function, JavaScript hace lo siguiente:

// 1. Crea un nuevo objeto vacío.
// 2. Establece el prototipo del nuevo objeto al objeto que se encuentra en la propiedad `prototype` de la constructor function.
// 3. Ejecuta la constructor function con `this` establecido al nuevo objeto creado.
// 4. Devuelve el objeto creado, a menos que la función devuelva un objeto diferente explícitamente.



//Crearemos un objeto con atributos y métodos --> { id: 1, recuperarClave}
function User(){ //por convención se utiliza UpperCamelCase/PascalCase, para nombrar funciones constructoras
    this.id = 1; // una nueva palaba reservada
    this.recuperarClave = function () {   // no la llamaremos  función, es un METODO, son funciones asignadas a la propiedad de un objeto
        console.log('recuperando clave...');
    }
}

//Si queremos crear un objeto de User debemos utilizar la keyword new  ***DE MEMORIA new***
let user = new User();// Pasan las cuatro cosas cuando utilizmos new
                      //       1.  Se crea un objeto vacío   {  } 
                      //       2.  Se vincula el prototipo de la función User(constructor function) con el objeto vacío (más adelante)
                      //       3.  El objeto vacío se le asigna a this de la línea 16, this = { }
                     //        4.  En este caso  retorna this, no hay ningún return.
console.log(user);



//Aquí tienes un ejemplo de cómo definir y utilizar una constructor function:


function Persona(nombre, edad) {  //por convención se utiliza UpperCamelCase/PascalCase
  this.nombre = nombre;
  this.edad = edad;

  this.hablar = function() {
    console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  };
}

// Crear nuevos objetos Persona
var persona1 = new Persona('Juan', 30);
var persona2 = new Persona('Ana', 25);

// Llamar al método hablar de cada objeto creado
persona1.hablar(); // Salida: Mi nombre es Juan y tengo 30 años.
persona2.hablar(); // Salida: Mi nombre es Ana y tengo 25 años.


/**
 * En JavaScript, tanto las **factory functions** como las **constructor functions**
 * son PATRONES DE DISEÑO utilizados para crear objetos, pero tienen diferencias clave en su implementación y uso.
 * 
 * ### Factory Functions

Las **factory functions** son simplemente FUNCIONES QUE CREAN Y RETORNAN UN OBJETO. No utilizan la palabra clave `new` cuando se invocan.

 Estas funciones pueden establecer propiedades y métodos al objeto que retornan, basándose en los argumentos que reciben.
Una ventaja de las factory functions es que facilitan la creación de métodos privados y públicos.

function crearPersona(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    hablar: function() {
      console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`);
    }
  };
}

const juan = crearPersona("Juan", 30);
juan.hablar(); // Mi nombre es Juan y tengo 30 años.


### Constructor Functions



#### Ejemplo de Constructor Function

```javascript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.hablar = function() {
    console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  };
}

const maria = new Persona("Maria", 25);
maria.hablar(); // Mi nombre es Maria y tengo 25 años.

Las **constructor functions** son funciones que se utilizan específicamente para construir nuevos objetos. A diferencia de las factory functions, 
las constructor functions se invocan utilizando la palabra clave `new`. Al hacer esto, JavaScript automáticamente crea un nuevo objeto, vincula 
el valor de `this` dentro de la función al nuevo objeto, y retorna el objeto si la función no retorna un objeto explícitamente.

Una característica distintiva de las constructor functions es que, por convención, se nombran con la primera letra en mayúscula. 
Esto ayuda a diferenciarlas de las funciones normales. Las constructor functions pueden asignar propiedades y métodos al nuevo objeto
 utilizando `this`.


 */
/**
 * Preguntas:  ¿Cuáles son las diferencias entre  factory function y  constructor function?
 *             ¿Para qué se utilza la palabra reservada new?
 * 
 */
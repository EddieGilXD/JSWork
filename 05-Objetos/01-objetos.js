
/** Recomendaciones:
 * Lea  todo el documento, despacio, tranquilamente, no intente enterderlo todo, solo lea.
 * Lea una segunda vez imaginando qué pueden ser los conceptos.
 * Lea una tercera vez, intente comprender los conceptos, apunte sus preguntas.
 * No se desanime si no lo comprende en los tres intentos.
 * Recuerde, aprender un lenguaje de programación es una tarea compleja, pero no extremadamente
 * difícil, requiere estudio y práctica, por lo consiguiente tiempo.
 * 
 * Escriba el código hasta 5 veces y ejecutelo la misma cantidad (5).
 * El código  debe aprenderlo, no siga hasta que haya comprendido 
 * la estructura del código y de cómo funciona.
 * 
 */


/**                   PARADIGMA
 * Un PARADIGMA en programación se refiere a un conjunto de conceptos y técnicas que guían la forma en
 * que escribimos código.  Es una especie de  "modelo mental" que nos ayuda a abordar problemas
 * y estructurar nuestras soluciones de manera coherente. 
 */


/**                  OBJETO 
 * En la Programación Orientada a Objetos, un OBJETO es una instancia concreta de una clase.
 * 
 *    Una CLASE es como un plano o una plantilla que define las propiedades (atributos) y los comportamientos
  (métodos) que los objetos de esa clase tendrán.  Por ejemplo,
  si tenemos una clase "Perro", los objetos creados a partir de esa clase serían perros individuales 
  con sus propias características (nombre, edad, color, etc.).

 *     Un objeto en programación es una instancia de una clase que representa una entidad o concepto del mundo real.

 *     En resumen, los objetos son la forma en que se modelan y manipulan los datos en la programación orientada a objetos, 
       lo que permite representar entidades del mundo real de manera más estructurada y modular.
*/




/**              PROGRAMACION ORIENTADA A OBJETOS  (OOP)
 * La programación orientada a objetos (POO) es un paradigma de programación que se basa en el
 * concepto de "objetos", los cuales representan entidades del mundo real que tienen características (atributos)
 * y comportamientos(métodos). En POO, los objetos son la unidad básica de estructuración del código, y se pueden crear 
 * nuevos objetos basados en modelos existentes(clases).
 * 
 *     Las clases en POO actúan como plantillas para crear objetos.  Una clase define las propiedades y 
 * métodos comunes a un conjunto de objetos.  Los objetos son instancias individuales de una clase y 
 * pueden tener sus propias propiedades y métodos, además de heredar los de la clase padre.  
 * 
 *    POO se basa en cuatro conceptos fundamentales:
 * 
 *    1. ABSTRACCION:     Permite identificar las caracteristicas y comportamientos esenciales de un objeto
 *                        del mundo real y representarlos en un modelo de clase.
 *   
 *    2. ENCAPSULAMIENTO: Consiste en ocultar los detalles de implementación de un objeto y exponer
 *                        solo una interfaz para interactuar con el.  Esto ayuda a mantener la integridad de 
 *                        los datos y a simplificar el uso de los objetos.
 * 
 *    3. HERENCIA:        Permite que una clase herede las propiedades y métodos de otra clase.  Esto
 *                        fomenta la reutilización del código y la creación de jerarquías de clases
 * 
 *    4. POLIMORFISMO:    Permite que objetos de diferentes clases respondan de manera específica a una misma acción o método.
 *                        Esto proporciona flexibilidad en el diseño y permite tratar objetos de diferentes clases
 *                        de manera uniforme.
 * 
 * Es ampliamente utilizada en el desarrollo de software debido a su capacidad de modelar problemas
 * complejos de manera más clara y estructurada.
 *                                
 */

/**               OOP en JavaScript
 * La programación orientada a objetos (POO) es un estilo de programación en el que modelamos nuestros programas como 
 * una colección de objetos interconectados. Algunos puntos clave sobre la POO en JavaScript:
 *
 *
 *      Prototipos en lugar de clases:
 *              A diferencia de lenguajes como Java o C#, JavaScript no se basa en clases. En cambio, utiliza prototipos.
 *      Un prototipo es un objeto que se utiliza como plantilla para crear otros objetos. Cada objeto tiene acceso 
 *      a las propiedades y métodos de su prototipo.
 *      Por ejemplo, el prototipo Object es el prototipo base para todos los objetos en JavaScript.
 *      
 *      Herencia mediante prototipos:
 *              En lugar de heredar directamente de una clase, los objetos en JavaScript heredan propiedades y métodos de sus prototipos.
 *      Por ejemplo, si creamos un objeto perro a partir de un prototipo Perro, ese objeto tendrá acceso a las propiedades y métodos 
 *      definidos en el prototipo. 
 * 
 *      Creación de objetos:
 *              Podemos crear objetos directamente utilizando la notación de llaves {} o mediante constructores de funciones.
 * 
 *      Modificación del prototipo:
 *              Podemos modificar el prototipo de un objeto para agregar o sobrescribir propiedades y métodos.
 * 
 * 
 * En resumen, aunque JavaScript no sigue el modelo de clases tradicional, su enfoque en prototipos permite 
 * una flexibilidad interesante en la creación y modificación de objetos.
 *
 */

/**  
 * 
 * Una **clase** es una plantilla para la creación de objetos que encapsula datos para el objeto (atributos) y métodos 
 * para operar en esos datos. Las clases soportan la herencia, 
 * permitiendo que clases hijas hereden atributos y métodos de clases padres, 
 * facilitando la reutilización de código y la creación de jerarquías de objetos.
 * 
 * Un **prototipo** es un objeto del cual otros objetos pueden heredar propiedades y métodos. En JavaScript, la herencia se realiza
 *  a través de prototipos, permitiendo que un objeto pueda tener acceso a propiedades 
 * y métodos de otro objeto. Esto es fundamental en el paradigma de prototipos de JavaScript,
 * donde casi todos los objetos son instancias de otro objeto.
 * 
 * 
 * ### Diferencias entre clases y prototipos

1. **Sintaxis y concepto**: Las clases son una abstracción que proviene de la programación orientada a objetos clásica, con una sintaxis
                            específica para definir e instanciar nuevas clases. Los prototipos, por otro lado, son específicos de JavaScript 
                            y representan una forma más dinámica y flexible de herencia.

2. **Modificación en tiempo de ejecución**: Los prototipos permiten modificar la cadena de herencia "en tiempo de ejecución", es decir,
                                            después de que los objetos han sido creados. Las clases, especialmente en lenguajes de programación
                                            estáticos, no suelen permitir este nivel de flexibilidad.

3. **Definición de la herencia**: En las clases, la herencia se define en el momento de la definición de la clase (a través de `extends`
                                  en JavaScript, por ejemplo). En el sistema de prototipos, la herencia se establece a través de 
                                  la propiedad `__proto__` o funciones como `Object.create`.


### Similitudes entre clases y prototipos

1. **Herencia**: Tanto las clases como los prototipos se utilizan para implementar la herencia en la programación orientada a objetos,
                 permitiendo que un objeto herede propiedades y métodos de otro.

2. **Reutilización de código**: Ambos mecanismos promueven la reutilización de código. Las clases lo hacen a través de la herencia de clases,
                                mientras que los prototipos lo hacen a través de la cadena de prototipos.

3. **Encapsulamiento**: Las clases y los prototipos pueden ser utilizados para encapsular y organizar el código, agrupando datos y 
                        comportamientos relacionados.
 * 
 * 
 En resumen, aunque las clases y los prototipos pueden servir a propósitos similares en términos de herencia y reutilización de código, 
 difieren significativamente en su implementación y flexibilidad.
 * 
 * 
En JavaScript, tanto las clases como los prototipos son fundamentales para la herencia y la reutilización de código,
 pero tienen diferencias clave en su sintaxis y en cómo se conceptualizan.

 * #### Clases
Las clases en JavaScript fueron introducidas en ES6 (ECMAScript 2015) como una capa de abstracción sobre los prototipos, 
proporcionando una sintaxis más clara y familiar para los desarrolladores que vienen de lenguajes basados en clases. Las clases son, 
en esencia, "funciones especiales", y al igual que las funciones, pueden ser definidas tanto por declaraciones como por expresiones.
```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  hablar() {
    console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}


#### Prototipos
Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí. 
En JavaScript, cada objeto tiene un prototipo interno (accesible a través de la propiedad `__proto__` o mediante `Object.getPrototypeOf()`),
 que es otro objeto del cual hereda métodos y propiedades. Este sistema de herencia basado en prototipos es más flexible que la herencia
basada en clases de otros lenguajes, permitiendo la modificación de prototipos "en tiempo de ejecución" 
y la creación de cadenas de herencia complejas.

```javascript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}
Persona.prototype.hablar = function() {
  console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
};
const juan = new Persona('Juan', 30);
juan.hablar(); // Mi nombre es Juan y tengo 30 años.
 */


/**La necesidad de crear el paradigma de programación orientada a objetos surge por varias razones fundamentales:
 * 
1. **Complejidad del Software**: A medida que el software se volvía más complejo, se hacía evidente la necesidad de 
     un enfoque más organizado y escalable para el diseño y mantenimiento de programas. La programación orientada a objetos
     ofrece una estructura que facilita la gestión de sistemas complejos.

2. **Reutilización de Código**: Este paradigma promueve la reutilización de código a través de la herencia y la polimorfismo,
     lo que permite a los desarrolladores construir nuevas aplicaciones más rápidamente, aprovechando componentes existentes.

3. **Modularidad**: La encapsulación permite agrupar los datos (atributos) y los métodos (funciones o procedimientos) que operan 
     sobre los datos en unidades denominadas objetos. Esto ayuda a organizar mejor el código y a hacerlo más modular, lo que a su 
     vez facilita la depuración, el mantenimiento y la actualización de los programas.

4. **Abstracción y Simplicidad**: La programación orientada a objetos permite a los desarrolladores trabajar con abstracciones de alto nivel,
     utilizando objetos que representan conceptos o entidades del mundo real. Esto hace que el código sea más intuitivo y fácil de entender.

5. **Flexibilidad y Eficiencia en el Desarrollo**: La capacidad de crear clases y objetos que pueden ser fácilmente modificados y adaptados 
    para diferentes necesidades hace que el desarrollo de software sea más flexible y eficiente.

    En resumen, el paradigma de programación orientada a objetos surgió como una solución a las limitaciones de los paradigmas anteriores, 
    ofreciendo un enfoque más natural, eficiente y organizado para el desarrollo de software.
     */



//Tratemos de crear usuarios de la siguiente manera

//usuario0
let nombre = 'Paola';
let apellido = 'Ortiz';
let email = 'paola@company.ru'
let direccion = {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 25,
};

//usuario1
let nombre1 = 'Paolo';
let apellido1 = 'Ortega';
let email1 = 'paolo@company.ru'
let direccion1 = {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 25,
};

//usuario2...


//observa que esto es más ordenado y fácil de manejar que lo declarado en las líneas 209 -- 215
//¿Ya observaste que son datos relacionados y forman un todo?

let user = {                    //objeto user
    nombre: 'Paola',
    apellido: 'Ortiz',
    email: 'paola@company.ru',
    direccion: {                 // objeto direccion dentro del ojeto user
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25,
    },
    estado: true,               //podemos asignar valores boolean
    recuperarClave: function () { //podemos asignar funciones, en este caso funcion () sin nombre es llamada función anónima
        console.log('Recuperar clave...')
    }
};
//El anterior ejemplo no ejecutara nada en consola


/** A este estilo de programación en los que tomamos datos relacionados entre si 
 * y acciones que se pueden realizar con ellos, se le conoce como POO (OOP)
 * 
 * PROPIEDADES (ATRIBUTOS) del OBJETO user:
 *      nombre: 'Paola',
        apellido: 'Ortiz',
        email: 'paola@company.ru',
        direccion: {                 // objeto direccion dentro del ojeto user
            municipio: 'Jocotenango',
            calle: 'Calle ancha',
            numero: 25,
        },
        estado: true,

    COMPORTAMIENTOS (METODOS) del OBJETO user:
        recuperarClave: function () { //podemos asignar funciones, en este caso funcion () sin nombre es llamada función anónima
        console.log('Recuperar clave...')
    }  
 * 
*/

/**
 * PREGUNTAS:
 * ¿Qué es un paradigma?
 * ¿Qué es un objeto?
 * ¿De qué están formados los objetos?
 * ¿En POO, qué es un objeto?
 * ¿Cuáles son los cuatro conceptos fundamentales en los que se basa POO?
 * ¿Por qué POO es ampliamente utilizada en el desarrollo de software?
 * ¿Qué es una clase?
 * ¿Qué es un prototipo?
 */



/**
 * Las clases y los prototipos son dos maneras de manejar la herencia y la reutilización de código en JavaScript.
 *  Aunque ambos pueden ser utilizados para lograr resultados similares, hay varias ventajas de usar clases sobre prototipos:

1. **Sintaxis más clara y concisa**: La sintaxis de las clases es más fácil de entender y escribir para personas que vienen de otros lenguajes 
                                     de programación orientados a objetos. Esto hace que el código sea más legible y mantenible.

2. **Encapsulamiento**: Las clases permiten una mejor encapsulación de código. Puedes definir propiedades y métodos privados y protegidos, 
                        lo cual no es tan directo cuando se trabaja con prototipos.

3. **Herencia más sencilla**: La herencia se maneja de manera más intuitiva con la palabra clave `extends`, 
                              permitiendo crear subclases de manera más sencilla y legible que con el manejo de prototipos.

4. **Soporte en TypeScript**: Si estás utilizando TypeScript, las clases son una parte fundamental del lenguaje, 
                              ofreciendo características avanzadas como tipos genéricos, interfaces, y más, que no están tan
                              fácilmente disponibles o son más complicadas de implementar con prototipos.

5. **Compatibilidad y herramientas modernas**: Aunque los prototipos son la base de las clases en JavaScript, el uso de clases es más compatible 
                                               con herramientas modernas de desarrollo como Babel, lo que permite usar características de 
                                               ECMAScript 2015 (ES6) y posteriores, incluso en entornos que no soportan directamente 
                                               estas características.

 En resumen, aunque los prototipos ofrecen un control más fino y directo sobre la herencia y la cadena de prototipos,
 las clases proporcionan una manera más accesible, legible y mantenible de lograr objetivos similares, 
 especialmente para aquellos desarrolladores que vienen de otros lenguajes de programación orientados a objetos.
 */
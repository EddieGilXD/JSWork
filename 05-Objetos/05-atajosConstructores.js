
/**   Los **atajos constructores** en JavaScript son funciones predefinidas o métodos que permiten crear 
 * objetos de ciertos tipos de manera más rápida y concisa. 
 * 
 *     Estos atajos son importantes porque simplifican el código,
 *  lo hacen más legible y eficiente, y facilitan la creación de instancias de objetos comunes como 
 *  arreglos, objetos, fechas, entre otros, sin necesidad de definir una función constructora explícitamente.
 */


/** Para qué se utilizan:
    Se utilizan para crear instancias de objetos de manera rápida, aprovechando las capacidades integradas del lenguaje.
    Esto es especialmente útil cuando se necesita trabajar con tipos de datos complejos o estructuras de datos comunes
*/

/**  Por qué son importantes

- **Simplicidad**: Permiten escribir menos código y hacerlo más legible.
- **Eficiencia**: Al ser parte del lenguaje, están optimizados para su propósito.
- **Legibilidad**: Hacen el código más fácil de entender a primera vista.
 */


// obj y obj2 son creados con el constructor nativo, la función Object() esta es una función constructora
let obj = {}; // creamos un objeto, es un atajo, en verdad llama al constructor de objetos
let obj2 = new Object() // o podemos crear un objeto llamando al constructor de objetos
                        // todos los objetos tienen una propiedad constructor
console.log(typeof(obj), typeof(obj2));


//user es creado con nuestro constructor User()
function User() {
    this.name = "Bernes-Lee"
}
let user = new User();
console.log(user.constructor);

//Ahora ve a consola en el navegador, escribe las siguientes instrucciones en la ventana interactiva
//obj.constructor
//obj2.constructor
//user.constructor


//Veamos el constructor de arrays
//podemos crear arrays de las siguientes maneras

//Lo que a continuación se presenta solo es una introducción no se pretende entrar en detalles
const array1 = [1,2,3,4]; // lo creamos  literal, atajos
const array2 = new Array(1,2,3,4);  // lo creamos con su constructor
console.log(typeof(array1), typeof(array2));


const string1 = new String("soy string1"); //Lo creamos con su constructor
const string2 = "soy string2";  //lo creamos  literal, atajo
console.log(typeof(string1), typeof(string2));

const number1 = new Number(13);  //Lo creamos con su constructor
const number2 = 12;              // lo creamos  literal, atajo
console.log(typeof(number1),typeof(number2));

//Los creados de manera literal se comportan diferente a los creados con su constructor

const stringLiteral = "2 + 2";   // string literal
const stringConstructor = new String("2 + 2");
console.log("literal vs constructor",stringLiteral,stringConstructor); // no importa cual usemos, vamos a poder seguir utilizando operaciones de strings 
                                                                       // sobre estos strings

//Pero si evaluamos los contenidos de los strings e intentamos evaluarlos
console.log("literal vs constructor \n",eval(stringLiteral),eval(stringConstructor));    
//Es recomendable utilizar los literales, pero si necesitáras crearlo con constructor
// y quieres evaluarlo
console.log(stringConstructor.valueOf());  //para obener su valor literal
console.log(eval(stringConstructor.valueOf()));                                     

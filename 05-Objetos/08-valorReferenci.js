//Abrir presentacion 2



// Tipos primitivos
let a = 1; // "a" apunta a un espacio de memoria que almacena el valor 1
let b = a; // "b" apunta a otro espacio de memoria que almacena el valor de "a", 1
console.log("Después de la declaración de a y b", a, b); // "a" es 1 y "b" es 1

b++;
console.log("11 Después del incremento en 1 de b",a,b); // "a" es 1 y "b" es 2, cada uno tiene su rpopio espacio de memoria
                                                     //"a" apunta a un espacio, "b" apunta a tro espacio.


//Tipos de referencia, objetos

let objetoA = {};
let objetoB = objetoA; //Tienen la misma dirección, la misma referencia, se modifican en el espacio real del objeto
console.log("19 objetoA ", objetoA, " objetoB", objetoB);

objetoB.prop = 1;
console.log("22" , "objetoA" , objetoA, " objetoB", objetoB);


//funciones
let c = 1;
function suma(n) {  // JavaScript crea una variable especial para ese parámetro, en este caso n
    n++;
    console.log("29 soy n =", n);
}

suma(c);
console.log("32 Yo soy c,no soy lo mismo que n, c =",c);


//funciones y objetos, los objetos se pasan por referencia
let d = {prop : 1};

function suma1(n) { // n = al objeto d, los objetos se pasan por referencia
    console.log("39 Estoy en diferente dirección pero somos la misma referencia con d", d, " ahora n ",n);
    n.prop++;
    console.log("Soy d ",d, "Soy n ", n);
}

suma1(d);

/** 
 * En JavaScript, la diferencia fundamental entre los tipos primitivos y los tipos de referencia radica en cómo se almacenan y acceden en la memoria, 
 * así como en su comportamiento al ser asignados a variables o pasados a funciones.

**Tipos Primitivos:**
Los tipos primitivos incluyen `undefined`, `null`, `boolean`, `number`, `string`, `symbol`, y `bigint`. Estos se caracterizan por:

- Almacenarse directamente en la ubicación de la variable que los contiene.
- Accederse por su valor, es decir, cuando asignas o pasas un tipo primitivo, se crea una copia de ese valor.
- Ser inmutables, lo que significa que no puedes cambiar los valores primitivos, sino que cada vez que se realiza una modificación,
  se crea un nuevo valor primitivo.

```javascript
let numero = 10;
let otroNumero = numero; // Se crea una copia del valor de `numero`
numero = 20; // `numero` ahora tiene un nuevo valor, pero `otroNumero` sigue siendo 10

**Tipos de Referencia:**
Los tipos de referencia incluyen objetos como `object`, `array`, `function`, entre otros. Estos se caracterizan por:

- Almacenarse en la memoria de forma indirecta. Una variable que contiene un tipo de referencia almacena una dirección de memoria (referencia)
  donde el valor real está guardado. Esto significa que la variable apunta al lugar de la memoria donde se almacena el valor.
- Accederse por referencia, es decir, cuando asignas o pasas un tipo de referencia, lo que se copia es la referencia (dirección de memoria),
  no el valor real. Esto implica que si modificas el objeto referenciado a través de una variable, cualquier otra variable que apunte al mismo 
  objeto reflejará estos cambios.
- Ser mutables, lo que significa que los valores a los que apuntan pueden ser modificados directamente, sin necesidad de crear un nuevo objeto o arreglo.

```javascript
let objeto = { clave: 'valor' };
let otroObjeto = objeto; // `otroObjeto` y `objeto` apuntan al mismo lugar en memoria
objeto.clave = 'nuevoValor'; // Modificar el valor a través de `objeto`
console.log(otroObjeto.clave); // Muestra 'nuevoValor', ya que `otroObjeto` apunta al mismo objeto
 */

/***************************** Preguntas  **************************** 
 * ¿Cuáles son los tipos Primitivos?
 * ¿Cuáles son los tipos de Referencia?
 * ¿En qué  radica la diferencia fundamental entre los tipos primitivos y los tipos de referencia?
 * ¿Cómo se almacenan los tipos primitivos?
 * ¿Cómo se alamcenan los tipos de Referencia?
 * ¿Los tipos primitivos son inmutables o mutables?
 * ¿Los tipos de referencia son inmutables o mutables?
 * ¿Qué es una referencia? 
*/

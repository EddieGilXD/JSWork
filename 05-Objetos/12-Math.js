

/** En JavaScript, existen varios objetos incorporados que proporcionan funcionalidades comunes y útiles sin
 *  necesidad de que los programadores los definan desde cero. Uno de estos objetos es `Math`, 
 * que ofrece propiedades y métodos para realizar operaciones matemáticas. 
 * 

### Math
El objeto `Math` incluye una serie de métodos y propiedades para realizar cálculos matemáticos. Algunos ejemplos son:

- `Math.PI`: La constante PI (aproximadamente 3.14159).
- `Math.random()`: Genera un número pseudoaleatorio entre 0 y 1.
- `Math.round(x)`: Redondea el número `x` al entero más cercano.
- `Math.max(a, b, c, ...)`: Devuelve el mayor de los números dados.
- `Math.min(a, b, c, ...)`: Devuelve el menor de los números dados.
 */

console.log(
    Math.PI,     //3.141526...
    Math.abs(-20), //20
    Math.round(20.49999999), //20
    Math.round(20.5),       //21
    Math.floor(20.99999999), //20
    Math.ceil(20.000000001), //21
    Math.pow(2,3),          //08
    Math.sqrt(9),

);

console.log(Math.random()); //generación de números pseudo aleatorios (0 y 1)

function getRandom(min, max) { //obtener números random en un intervalo
    return Math.random() * (max -min) + min
}

console.log(getRandom(1,10));

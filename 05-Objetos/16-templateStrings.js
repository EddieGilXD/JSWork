
/** 
### Template Strings
Las **template strings** (también conocidas como **template literals** o **plantillas de cadena**) son una característica de JavaScript introducida en ECMAScript 6 (ES6) que permite trabajar con cadenas de texto de una manera más flexible y legible. A diferencia de las cadenas de texto tradicionales delimitadas por comillas simples (`'`) o dobles (`"`), las template strings se delimitan con el acento grave (`` ` ``).
#### Características de las Template Strings
1. **Interpolación de Expresiones**: Permiten insertar variables y expresiones dentro de la cadena utilizando la sintaxis `${expresión}`.
2. **Multilínea**: Permiten crear cadenas de texto que abarcan múltiples líneas sin necesidad de caracteres especiales como `\n`.
3. **Incorporación de Comillas**: Facilitan la inclusión de comillas simples y dobles dentro de la cadena sin necesidad de escapar los caracteres.
#### Ejemplo de Template Strings
*/

const nombre = "Juan";
const edad = 30;

// Interpolación de expresiones
const saludo = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(saludo); // Hola, mi nombre es Juan y tengo 30 años.

// Multilínea
const mensaje = `Esta es una línea.
Esta es otra línea.`;
console.log(mensaje);
// Esta es una línea.
// Esta es otra línea.

function miFuncion(){
    return '"Hola soy miFuncion"'
};



const plantilla = ` Hola mi nombre es ${nombre}
y tengo ${edad} años, Es un gusto conocerte,

mira podemos utilzar ' " \n sin problemas, así
soy yo una "Template Strings"

También puedo llamar a una función ${miFuncion()}
Puedo hacer operaciones ${2**3}, ves lo versatil que soy`;

console.log(plantilla);

function plantillaFuncion(){
    return` "********************************"
    "Llamaste a la funcion plantilla" 
    Hola mi nombre es ${nombre}
    y tengo ${edad} años, Es un gusto conocerte,
    
    mira podemos utilzar ' " \n sin problemas, así
    soy yo una "Template Strings"
    
    También puedo llamar a una función ${miFuncion()}
    Puedo hacer operaciones ${2**3}, ves lo versatil que soy
    `;

    
}
console.log(plantillaFuncion());

//Podemos definir plantillas, mensajes que pueden ser utilizados para enviarle al usuario
// correos de promociones o algún texto que debamos mostrar dentro de alguna aplicación
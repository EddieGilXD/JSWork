

/**
 * JavaScript es un lenguaje de programación dinámico, lo que significa que permite realizar operaciones que en otros lenguajes requerirían una 
 * compilación previa. Este dinamismo se manifiesta de varias maneras, especialmente en cómo se manejan los objetos y tipos de datos. 
 * A continuación, se detalla cómo el dinamismo de JavaScript se relaciona con los objetos:

1. **Tipificación Dinámica:** En JavaScript, las variables no están vinculadas a tipos de datos específicos. Esto significa que una variable 
     puede referenciar a un objeto en un momento y luego a un tipo de dato completamente diferente, como un número o una cadena de texto, 
     en otro momento.

        ```javascript
        let miVariable = { nombre: "Juan" }; // miVariable es un objeto
        miVariable = "Ahora soy una cadena de texto"; // miVariable ahora es una cadena de texto


2. **Objetos Dinámicos:** Los objetos en JavaScript pueden ser modificados después de su creación. Esto significa que puedes añadir, 
modificar o eliminar propiedades de un objeto en cualquier momento durante la ejecución del programa. Esta flexibilidad es una de las 
características que hacen de JavaScript un lenguaje muy poderoso para la programación de aplicaciones web.

        ```javascript
        let persona = { nombre: "Ana" };
        persona.edad = 25; // Añadimos una nueva propiedad 'edad'
        persona.nombre = "Ana María"; // Modificamos la propiedad 'nombre'
        delete persona.edad; // Eliminamos la propiedad 'edad'
 */

//Por lo anterior, es posilbe que cuando estemos trabajando queramos ingresar a alguna propiedad, pero esta
//pudo haber sido borrada.  Aprenderemos a listar las propiedades de un objeto que pudieron ser creadas de manera
//dinámica

const punto = {
        x: 10,           // propiedad
        y: 15,           // propiedad
        dibujar() {     // método , observa que hemos eliminado la función anónima dibujar: function () {}
                console.log('dibujando');
        }
};

//delete punto.dibujar; //Borramos el método
punto.dibujar(); // ejecutalo y observa que aparece un error, luego comentala y  ejecuta con las siguientes líneas 
if ('dibujar' in punto) { //Buscamos al método dibujar y vemos si existe
        console.log("Al parecer dibujar esta in punto");
        punto.dibujar();
}

console.log("Estos son los keys del objeto punto: ",Object.keys(punto)) // es lo mismo que  let keys = Object.keys(punto)

for (let llave of Object.keys(punto)) { // llave por llave accederemos al valor
        console.log("Manera antigua",llave, punto[llave])
}

for (let entry of Object.entries(punto)){  // Object es un constructor y .entries es un método estático, es un metodo del constructor
        console.log(entry);                // son métodos estáticos o métodos de clase.
}


for (let llave in punto) {    // llava por llave accederemos al valor, esta es la manera moderna de hacerlo
        console.log("Manera moderna ", llave,punto[llave]);
}

/**     PREGUNTAS
 * ¿En JavaScript el dinamismo se manifiesta de varias maneras especialmente en?
 * Completa:
 *       Una variable puede referenciar a:
 * ¿En JavaScript los objetos pueden ser módificados después de su creación?
 * 
 * 
 */






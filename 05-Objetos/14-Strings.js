/**
 * El objeto `String` en JavaScript es una clase que se utiliza para trabajar con cadenas de texto. 
 * Proporciona una serie de métodos y propiedades que permiten manipular y acceder a la información 
 * contenida en una cadena. Aquí hay algunos ejemplos de lo que se puede hacer con el objeto `String`:
 * 
1. **Creación de una cadena**:
   ```javascript
   let cadena = "Hola, mundo!";
 */

   const saludo = "Hola Mundo!";
   console.log(typeof(saludo)); // tipo string

   const despedida = new String("Adios mundo!") //Utilizacmos el constructor
   console.log(typeof(despedida));  // tipo object


   //Recuerdas, los objetos tienen métodos, pero intenta llamar aun método de "saludo" o a una proiedad
   console.log(saludo.length);
   console.log(saludo.indexOf("ola"));//Devuelve el indice de un string que se encuentre dentro de otro string
   console.log(saludo.indexOf("jiod")); //como no lo encuentra devuelve -1
   console.log(saludo.includes(" Mun")) // Nos dice si esta en el string
   console.log(saludo.replace("Mundo","Luna")); // pero no cambia a la variable saludo
                                                // deberás declarar una vriable y guardar la operación
    console.log(saludo.toLowerCase())   // toma el texto y lo pasa a minúsculas
    console.log(saludo.toUpperCase())//    toma el texto y lo pasa a mayúsculas
    console.log(saludo.substring(2, 8));  // toma una parte del string, el índice final no se incluye


    //Quitar espacios
    const espacios = "       Hola      Mundo!     ";
    console.log(espacios.trim()); //Quita los espacios al inicio y al final
    console.log(espacios.trimStart());
    console.log(espacios.trimEnd());

   //console.log(saludo.); //buscando propiedades y métodos

   /**
    * En JavaScript, las cadenas de texto (strings) son primitivas, pero cuando se accede a una propiedad
    *  o método de una cadena, JavaScript convierte temporalmente la cadena primitiva en un objeto `String`. 
    * Este proceso se llama "autoboxing". Aquí hay un ejemplo para ilustrar este concepto:
    * 
    ```javascript
    let cadena = "Hola, mundo!";
    // Aunque 'cadena' es una primitiva, podemos usar métodos de objeto String
    let longitud = cadena.length; // 12
    let mayusculas = cadena.toUpperCase(); // "HOLA, MUNDO!"
    console.log(longitud); // 12
    console.log(mayusculas); // "HOLA, MUNDO!"
    */


    /**    PREGUNTAS
     * ¿Qué es autoboxing?
     */




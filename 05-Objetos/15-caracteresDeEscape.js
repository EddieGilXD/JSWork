

    /**
     * Un carácter de escape en JavaScript es una secuencia de caracteres que no se interpreta literalmente, sino que tiene un significado especial. Se utiliza para representar caracteres que de otro modo serían difíciles de incluir directamente en una cadena de texto. Los caracteres de escape comienzan con una barra invertida (`\`). Aquí hay algunos ejemplos comunes de caracteres de escape en JavaScript:
    1. **Nueva línea**: `\n`

    */
  
   let cadena = "Hola,\nmundo!";
   console.log(cadena);
   // Salida:
   // Hola,
   // mundo!

   /** 2. **Tabulación**: `\t`
   ```javascript
   */
   let cadena1 = "Hola,\tmundo!";
   console.log(cadena);
   // Salida:
   // Hola,   mundo! 

   
   /** 3. **Barra invertida**: `\\`
   */
   let cadena2 = "Hola,\\mundo!";
   console.log(cadena);
   // Salida:
   // Hola,\mundo!

   /** 4.  **Comilla doble** */
   let cadena3 = "Esta es una \"GRAN CADENA \" con comillas";
   console.log(cadena3); 

   /** 4.  **Comilla simple**  \' 
    * 
    */
    let cadena4 = "Esta  también es una \'GRAN CADENA \' con comillas";
    console.log(cadena4); 




    /**
     * ### ¿Qué es alcance?
          El alcance (o *scope* en inglés) se refiere al contexto en el cual las variables y 
          funciones están disponibles para su uso en el código. En JavaScript, existen principalmente 
          dos tipos de alcance:

            1. **Alcance Global**: Las variables declaradas fuera de cualquier función tienen un alcance global, 
                                   lo que significa que son accesibles desde cualquier parte del código.
            2. **Alcance de bloque**: Se refiere al contexto en el que las variables declaradas
                                      con let y const son accesibles.  Este tipo de alcance está limitado
                                      al bloque en el que declara la variable, es decir, cualquier cosa entre {}.
    */
    var globalVar = "Soy global";
    function ejemploGlobal() {
        console.log(globalVar); // "Soy global"
    }
    ejemploGlobal();
    console.log(globalVar); // "Soy global"

    /**
     * ### Hoisting

**Hoisting** es un comportamiento en JavaScript en el que las declaraciones de variables y funciones se mueven 
            al principio de su contexto de ejecución antes de que se ejecute el código. 
            Esto significa que una variable o función puede ser utilizada antes de haber sido declarada en el código.

        #### Características del Hoisting

        1. **Variables con `var`**: Las variables declaradas con `var` se elevan al inicio de su contexto 
                                   (función o global), pero su inicialización no se eleva.
        2. **Variables con `let` y `const`**: Aunque las declaraciones de `let` y `const` también se elevan, 
                                              no se pueden usar antes de su declaración en el código. 
                                              Esto se conoce como "zona muerta temporal" (TDZ, por sus siglas en inglés).
        3. **Funciones**: Las declaraciones de funciones se elevan completamente, lo que incluye tanto la declaración
                          como la definición de la función.

        #### Ejemplo con `var`
    */
        
    console.log(a); // undefined
    var a = 5;
    console.log(a); // 5
        

     

    /**
     * En JavaScript, `let`, `const` y `var` son palabras clave utilizadas para declarar variables, pero tienen 
     * diferencias importantes en cuanto a su alcance y mutabilidad.

### `var`
- **Alcance**: Las variables declaradas con `var` tienen un alcance de función o global si se declaran fuera de 
               una función.
- **Hoisting**: Las declaraciones de `var` se elevan (hoisted) al inicio de su contexto de ejecución, 
                pero su inicialización no.
- **Re-declaración**: Se puede re-declarar la misma variable en el mismo ámbito sin errores.
     * 
     */

  function ejemploVar() {
      var x = 1;
      if (true) {
          var x = 2; // misma variable
          console.log(x); // 2
      }
      console.log(x); // 2
  }
  ejemploVar();

/** 
  ### `let`
- **Alcance**: Las variables declaradas con `let` tienen un alcance de bloque, lo que significa que solo existen 
               dentro del bloque donde fueron declaradas.
- **Hoisting**: Las declaraciones de `let` también se elevan, pero no se pueden usar antes de su declaración.
- **Re-declaración**: No se puede re-declarar la misma variable en el mismo ámbito.

  */
  function ejemploLet() {
      let x = 1;
      if (true) {
          let x = 2; // variable diferente
          console.log(x); // 2
      }
      console.log(x); // 1
  }
  ejemploLet();

/**
 * ### `const`
- **Alcance**: Las variables declaradas con `const` tienen un alcance de bloque, similar a `let`.
- **Hoisting**: Las declaraciones de `const` también se elevan, pero no se pueden usar antes de su declaración.
- **Re-declaración**: No se puede re-declarar la misma variable en el mismo ámbito.
- **Inmutabilidad**: Una vez asignado un valor a una variable `const`, no se puede reasignar. Sin embargo, si el valor es un objeto o un array, sus propiedades o elementos pueden ser modificados.

*/
  function ejemploConst() {
      const x = 1;
      if (true) {
          const x = 2; // variable diferente
          console.log(x); // 2
      }
      console.log(x); // 1

      const obj = { a: 1 };
      obj.a = 2; // permitido
      console.log(obj.a); // 2

      // obj = { b: 2 }; // Error: no se puede reasignar un `const`
  }
  ejemploConst();

  /**
   * ¿Qué es alcance?
   * ¿Qué es hoisting?
   * ¿Qué es re-declarar?
   */
 
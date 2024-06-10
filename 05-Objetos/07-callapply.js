/**
 * Las funciones `call()` y `apply()` en JavaScript son métodos de función que permiten establecer el valor de `this` 
 * dentro de la función que se está llamando y luego invocar esa función inmediatamente.
 * 
 *  La principal diferencia entre `call()` y `apply()` radica en cómo reciben los argumentos:

-                  call(thisArg, arg1, arg2, ...)`: Recibe el valor de `this` como primer argumento,
                   y luego los argumentos de la función son pasados individualmente (separados por comas).

                   function saludar(titulo, apellido) {
                        console.log(`Hola, ${titulo} ${this.nombre} ${apellido}`);
                        }

                        const persona = { nombre: 'Juan' };
                        saludar.call(persona, 'Sr.', 'Pérez'); // Hola, Sr. Juan Pérez


        
    apply() es un método de función en JavaScript que permite establecer el valor de `this` dentro de la función que se está llamando, 
    similar a `call()`, pero en lugar de pasar los argumentos de la función individualmente, `apply()` los recibe como un arreglo.
    apply(thisArg, [argsArray])`: Recibe el valor de `this` como primer argumento, y luego los argumentos de la función son pasados como
    un arreglo (o un objeto similar a un arreglo).

    Aquí tienes un ejemplo de cómo usar `apply()`:

   
    function presentar(lugar, dia) {
    console.log(`Mi nombre es ${this.nombre}. Nos vemos en ${lugar} el ${dia}.`);
    }

    const persona = { nombre: 'Ana' };
    presentar.apply(persona, ['la oficina', 'lunes']); // Mi nombre es Ana. Nos vemos en la oficina el lunes.   
 */


    function Punto(x,y) {
      this.x = x;
      this.y = y;
      this.dibujar = function() { console.log('Dibujando...');}
   }

   //************************call() ************************************** */
      let callPunto = { z: 5};
      Punto.call(callPunto, 1, 2);  //call(thisArg, arg1, arg2, ...), observa la manera en que extendemos a callPunto
                                    // callPunto solo tiene a la propiedad z, ahora le agregaremos las propiedades x & y, y el método dibujar()
      callPunto.dibujar();
      console.log('Con call()',callPunto);


      let callPunto2 = { z: 10};
      Punto.call(callPunto2, 3, 4); // los valores se pasan uno a uno
      callPunto2.dibujar();
      console.log('Con call()',callPunto2);


   //****************************apply()************************************* */

      let applyPunto = { z: 15};
      Punto.apply(applyPunto, [5, 6]);  //Los valores se pasan el primero, y un array
      applyPunto.dibujar();
      console.log('Con apply()', applyPunto);


      let applyPunto2 = { z: 20};
      Punto.apply(applyPunto2, [5, 6]);
      applyPunto.dibujar();
      console.log('Con apply()', applyPunto2);




    //call( ) y apply( ) nos sirven para poder extender objetos y funciones.

//     Las funciones `call()` y `apply()` en JavaScript son utilizadas para establecer el contexto de `this` en una función 
//     y luego invocar esa función inmediatamente. Ambas permiten controlar explícitamente el valor de `this` dentro de la función 
//     que se llama, pero difieren en la manera en que reciben los argumentos de la función:
    
//     `call(thisArg, arg1, arg2, ...)`: Permite llamar a una función con un valor específico para `this` y argumentos individuales 
//     para la función. Los argumentos se pasan después del primer argumento `thisArg`, y cada uno se especifica individualmente.

// -   `apply(thisArg, [argsArray])`: Similar a `call()`, permite llamar a una función con un valor específico para `this`. 
//      Sin embargo, `apply()` recibe los argumentos de la función como un arreglo (o un objeto similar a un arreglo), 
//      lo que es útil cuando no se conoce de antemano el número de argumentos que se pasarán a la función.

//      Ambos métodos son fundamentales para la programación funcional en JavaScript, ya que permiten una mayor flexibilidad y 
//      control sobre el comportamiento de las funciones, especialmente en situaciones donde el contexto de `this` necesita ser 
//      explícitamente definido o manipulado.


/**********************************************     Preguntas     **********************************************************************
 * ¿Para qué son fundamentales los métodos call() y apply() en JavaScript?
 * ¿Para qué nos sirven los métodos call() y apply()?
 */
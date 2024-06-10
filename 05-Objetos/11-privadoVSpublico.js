/**
 * En JavaScript, la visibilidad de las propiedades y métodos de un objeto se refiere a su accesibilidad 
 * desde fuera del objeto. Esto se conoce comúnmente como la diferencia entre miembros "públicos" y "privados" de un objeto o clase.
 * 
 * - **Público:** Cuando una propiedad o método es público, significa que puede ser accedido desde cualquier parte del código, 
 *                fuera del objeto o clase donde fue definido. En JavaScript, las propiedades y métodos son públicos por defecto. 
 *                Esto permite que sean fácilmente accesibles y modificables.
 * 
 *                ```javascript (observa las similitudes de una class con un objeto)
                    class Persona {
                    constructor(nombre) {
                        this.nombre = nombre; // Propiedad pública
                    }
                    
                    saludar() { // Método público
                        console.log(`Hola, mi nombre es ${this.nombre}`);
                    }
                    }

                    const ana = new Persona("Ana");
                    ana.saludar(); // Acceso público al método
                    console.log(ana.nombre); // Acceso público a la propiedad
 * 
 * 
 * _**Privado:** En contraste con los miembros públicos, los miembros **privados** de una clase o objeto en JavaScript son aquellos que solo
 *               pueden ser accedidos o modificados desde dentro de la propia clase o objeto. Esto significa que no se pueden acceder 
 *               directamente desde fuera de la clase o objeto, proporcionando una forma de encapsulamiento que protege y oculta los detalles 
 *               de implementación de la clase.
 * 
 *               Para definir propiedades o métodos privados en JavaScript, se utiliza el prefijo `#` antes del nombre de la propiedad o método. 
 *               Esto indica que son privados y no pueden ser accedidos o modificados fuera de la clase.
 * 
 *               ```javascript
                    class Persona {
                    #edad; // Propiedad privada

                    constructor(nombre, edad) {
                        this.nombre = nombre; // Propiedad pública
                        this.#edad = edad; // Asignación a propiedad privada
                    }

                    mostrarEdad() { // Método público que accede a propiedad privada
                        console.log(`Mi edad es ${this.#edad}`);
                    }

                    #metodoPrivado() { // Método privado
                        console.log('Este es un método privado');
                    }
                    }

                    const luis = new Persona("Luis", 30);
                    luis.mostrarEdad(); // Acceso permitido a través de un método público
                    console.log(luis.#edad); // Error: La propiedad "#edad" es privada y no puede ser accedida desde fuera
                    luis.#metodoPrivado(); // Error: "#metodoPrivado" es un método privado y no puede ser llamado desde fuera
 * 
 * 
 * La elección entre hacer un método público o privado en una clase depende de la necesidad de acceso y la intención de encapsulamiento 
 * dentro del diseño de la clase. Aquí se explican las razones para elegir uno sobre el otro:

### Métodos Públicos

- **Accesibilidad:** Los métodos públicos son accesibles desde cualquier parte del código donde se tenga una instancia de la clase. 
Esto es útil para exponer funcionalidades que forman la interfaz pública de la clase, permitiendo a los objetos interactuar entre sí.
- **Interfaz de la Clase:** Definen cómo se espera que otras partes del código interactúen con la clase. Son parte del contrato que la 
                            clase expone al exterior.
- **Extensibilidad:** Permiten que las clases derivadas o los consumidores de la clase utilicen y sobrescriban ciertas funcionalidades, 
                     facilitando la extensión y la personalización del comportamiento de la clase.

### Métodos Privados

- **Encapsulamiento:** Los métodos privados son utilizados para ocultar los detalles de implementación interna de la clase. 
                       Esto significa que solo pueden ser llamados desde otros métodos dentro de la misma clase.
- **Simplificación de la Interfaz Pública:** Al mantener ciertos métodos como privados, se reduce la complejidad vista por el 
                                             consumidor de la clase, exponiendo solo lo que es necesario para el uso de la clase.
- **Control de Modificaciones:** Los métodos privados no pueden ser llamados directamente desde fuera de la clase, lo que previene 
                                 cambios no deseados en el estado interno de la clase o en su comportamiento. Esto ayuda a mantener la 
                                 integridad de los datos y la lógica de la clase.
- **Refactorización Segura:** Al ser detalles de implementación, los métodos privados pueden ser modificados o refactorizados sin preocuparse 
                              por afectar a los consumidores de la clase, siempre y cuando se mantenga la funcionalidad externa intacta.

En resumen, la decisión de hacer un método público o privado se basa en la necesidad de exponer funcionalidades específicas a los usuarios de 
la clase y en la intención de proteger y ocultar los detalles internos de la implementación, promoviendo un diseño de software robusto y mantenible.
 * 
 * 
 * Aquí tienes algunos ejemplos de la vida real para entender el concepto de propiedades y métodos privados y públicos:
1. **Coche (Automóvil)**
   -    **Público**: Encender el coche, acelerar, frenar, cambiar la radio. Estas son acciones que cualquier persona puede realizar con el coche.
   -    **Privado**: Cambiar la configuración del motor, modificar el software del sistema de frenos. Estas son acciones que solo deberían ser
                     realizadas por mecánicos o técnicos especializados, ya que requieren un conocimiento específico del sistema interno del coche.
2. **Cuenta Bancaria**
                    - **Público**: Depositar dinero, retirar dinero, consultar saldo. Estas son operaciones que el titular de la cuenta puede realizar.
                    - **Privado**: Modificar la tasa de interés, cambiar los parámetros de seguridad de la cuenta. Estas son operaciones que 
                                   solo el banco o entidades autorizadas pueden realizar, ya que afectan el funcionamiento interno y la seguridad
                                   de la cuenta.
3. **Red Social**
                    - **Público**: Publicar un estado, comentar en una publicación, enviar un mensaje. Estas son acciones que cualquier usuario 
                                   puede realizar dentro de la plataforma.
                    - **Privado**: Acceder a los datos personales de los usuarios, modificar las políticas de privacidad de la plataforma. 
                                   Estas son acciones que solo los administradores o desarrolladores de la plataforma pueden realizar, 
                                   ya que implican el manejo de información sensible y la configuración interna de la red social.

Estos ejemplos muestran cómo en diferentes contextos, las acciones o propiedades pueden ser clasificadas como públicas o privadas
 dependiendo de quién debería tener acceso a ellas y la naturaleza de la acción o propiedad.
 * 
 */

 function Usuario() {
    this.id = 0;
    this.name = "Luisa";

    this.log = function () {
        console.log('logging...soy importante');
    }
    this.guardar = function () {
        this.log();
        console.log('guardando...');
    }
 }

 const usuario = new Usuario(); // creamos un objeto usuario
 console.log(usuario);         // observa que el usuario esta creado
 console.log(usuario.name);   // Luisa
 console.log(usuario.log());  // logging... soy importante
 console.log(usuario.guardar()); // logging...soy importante \n guardando...
                                 //Oberva la facilidad de llegar hasta ellos desde fuera

 //Pensemos que alguien por accidente reemplaza algo que debio estar protegido
 usuario.log = function() {
        console.log('jajaja...cambié tu código'); 
    };
 usuario.log();
 usuario.guardar();
 //Imagina alguna situación parecida en el mundo real


//¿qué podemos hacer para que nuestras propiedades o métodos no sean alterados.
//todo lo que asignemos a la palabra reservada de this será público y podemos acceder a ellos escribiendo el nombre del objeto y punto
function Usuario1() {
    let id = 1; //Observa que no utilizamos this 
    this.name = "Alejandra";

    let log = function() {      //Observa que no utilizamos this.
        console.log('logging...');
    } 

    this.guardar = function () {
        log();
        console.log('guardando...');
    }
 }

 const usuario1 = new Usuario1();
 usuario1.guardar();


 //Observa que los dos objetos tienen las "mismas" propiedades y los "mismos" métodos
 console.log(usuario);
 console.log(usuario1);


 usuario1.log1();// ni puedo tener acceso, menos cambiarla, esta protegida, es privada.
 
 

 
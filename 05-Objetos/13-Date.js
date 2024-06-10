/**
 * ### Date
El objeto `Date` se utiliza para trabajar con fechas y horas. Permite crear objetos de fecha, obtener y 
establecer partes de una fecha, y realizar cálculos con fechas. Ejemplos:

- `new Date()`: Crea un nuevo objeto de fecha con la fecha y hora actuales.
- `Date.now()`: Devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970.
- `date.getFullYear()`: Devuelve el año de la fecha especificada.
 */


//Crear un objeto Date()

const ahora = new Date(); //creamos la fecha actual de nuestra máquina local
console.log(ahora);


//creamos un objeto fecha, y creamos una fecha
const fecha = new Date('May 5 2023 14:15 GMT-0600 ') ; // MM/DD/YYYY formato EEUU, formato 24 horas, zona horaria 
                                                       // le pasamos una string a Date()
console.log(fecha);

const fecha2 = new Date(2001, 11, 25, 20, 33); // año, mes(0-11), día, hora, minutos, segundos(default 00)
                                       // otra forma 
console.log(fecha2);

//Transforma la hora, Zona horaria de Moscú, Rusia (GMT+3)
const fecha3 = new Date(2024, 4, 22, 20 + 9, 15); //-6 a + 3 diferencia horaria de 9 
console.log('Hora en Moscú', fecha3);

//Obtener fechas en formato Internacional
//Podemos acceder a los métodos de los objetos creados
console.log('datestring', fecha3.toDateString())   //Para ver la fecha en un formato más corto datestring
console.log('dateISOstring',fecha3.toISOString()); //formato Internacional
                                                   // esta es la fecha que se envía entre servidores
                                                   //Para enviar fechas de cliente servidor, servidro clente ISOString
console.log('timestring',fecha3.toTimeString());   //Para ver horas timestring


//Obtener el año, el día, la hora ... con los métodos get
console.log(fecha2);
console.log(fecha2.getMonth()); // obtienes el mes
console.log(fecha2.getFullYear()); // obtienes el día

//SI quieres cambiar la fecha
fecha2.setFullYear(1976);
console.log(fecha2);

// Ejemplo 1: Crear una nueva instancia de Date con la fecha y hora actuales
let fechaActual = new Date();
console.log('Ejemplo1',fechaActual);

// Ejemplo 2: Crear una nueva instancia de Date con una fecha específica
let fechaEspecifica = new Date('2023-10-05T10:20:30Z');
console.log('Fecha específica',fechaEspecifica);

// Ejemplo 3: Obtener el año, mes y día de una fecha
let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth() + 1; // Los meses empiezan desde 0
let dia = fechaActual.getDate();
console.log(`Año: ${anio}, Mes: ${mes}, Día: ${dia}`);

// Ejemplo 4: Obtener la hora, minutos y segundos de una fecha
let horas = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();
console.log(`Horas: ${horas}, Minutos: ${minutos}, Segundos: ${segundos}`);


// Ejemplo 5: Calcular la diferencia entre dos fechas
let fechaInicio = new Date('2023-03-31');
let fechaFin = new Date('2023-12-31');
let diferenciaTiempo = fechaFin - fechaInicio; // Diferencia en milisegundos
let diferenciaDias = diferenciaTiempo / (1000 * 60 * 60 * 24); // Convertir a días
console.log(`Diferencia en días: ${diferenciaDias}`);
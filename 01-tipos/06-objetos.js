//objeto: vehiculo
let marca = 'Nissan';
let tipo  = 'Suv';
let modelo = '2020';

//********Creamos un objeto***** */ 

let vehiculo = {
    marca: 'Toyota',
    tipo:  'Suv',
    modelo: '2020',
}; // creamos un objeto
console.log(vehiculo);

/********** cuarta parte*********
 * acceder a la propiedad
*/

//console.log(vehiculo.marca);

console.log(vehiculo['marca']); // observa que debemos acceder como string

//cambiar valor de la propiedad
//vehiculo.marca = "Nissan"; // si conoces las propiedades

let llave = 'marca';  // en caso no conocieras las propiedades o debes cambiar la llave (iterar)
vehiculo[llave] = 'Renault';

//eliminar propiedad
delete vehiculo.modelo;
console.log(vehiculo);

//agregar una propiedad

vehiculo.color = 'rojo';
console.log(vehiculo);
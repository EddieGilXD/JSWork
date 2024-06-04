/**         Funciones
 * 
 * Podemos pensar en ellas como bloques reutilizables,
 * si una tarea se debe realizar varias veces, significa
 * que necesitas una función
 * 
 */

function lavar(a, b, c, d) { // recibo los argumentos y los vuelvo parámetros
    console.log('Empieza la lavada');
    console.log('lavé la ', a);
    console.log('lavé la: ', b);
    console.log('lavé el ',c)

    let precio;
    precio = d * 3;
    console.log("El valor es: ", precio.toString(), ' quetzales');


    return precio;
    
}

//lavar(); // debemos llamarla, cuando ya haya nacido, claro.

let deboPagar = lavar('camisa', 'blusa', 'pantalón', 25); // Envío argumentos en la Primera lavada
console.log("Precio por la primera lavada, estoy fuera de la función:  ", deboPagar);

deboPagar = lavar('calceta', 'calcetín', 'playera', 10); // Envío argumentos en la Segunda lavada
console.log('Precio por la segunda lavada, estoy fuera de la función: ', deboPagar );
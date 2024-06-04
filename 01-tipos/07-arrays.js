let soyArrayVacia = []; // Array literal
let soyArray = ['busqueda', 'ordenamiento', 'predictivos', 'probabilisticos']; 
// este si respeta el orden
console.log(soyArray);

console.log(soyArray[0]); // en el index [0] esta 'busqueda'
console.log(soyArray[3]); // en el index [3] esta 'probabilisticos'

soyArray[4] = 'optimizacion'; // agregar un valor de a la array en el index [4]
console.log(soyArray);

console.log(typeof soyArray); // Saber el tipo del array

console.log('la longuitud es: ', soyArray.length); // es una propiedad, pero parece método
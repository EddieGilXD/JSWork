//Operadores aritméticos
let primerOperando = 2;
let segundoOperando = 10;
console.log(primerOperando + segundoOperando, 'adicion'); // adición
console.log(primerOperando - segundoOperando, 'sustracción'); // sustracción
console.log(primerOperando * segundoOperando, 'multiplicacion'); // multiplicación
console.log(primerOperando / segundoOperando, 'division'); // división
console.log(primerOperando ** segundoOperando, 'potencia'); // Exponenete
console.log(primerOperando % segundoOperando, 'modulo'); // módulo

// Operadores aritméticos Unarios, incremento y decremento
console.log('Valor original del primerOperando',primerOperando);
console.log('el primerOperando incrementa después',primerOperando++ );
console.log('El incremento al primer operando sucede\ndespués de la operación', primerOperando);
console.log('Valor original del segundoOpernado', segundoOperando);
console.log('El segundoOperando actúa de antes', ++segundoOperando);// valor = valor + 1, ++valor
console.log('El decremento en el primerOperando sucede después', primerOperando--);
console.log('Ahora si decrementó el primerOperando', primerOperando);
console.log("El decremento en segundoOperando\nsucede de inmediato", --segundoOperando);

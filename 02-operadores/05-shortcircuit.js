/**   Evaluan a falsy
 false: El valor booleano false.
0: El número 0.
-0: El número -0 (técnicamente, -0 es igual a 0 en JavaScript, pero se considera falsy).
0n: El BigInt 0n.
"": Una cadena de texto vacía.
null: El valor nulo.
undefined: El valor undefined.
NaN: El valor NaN (Not a Number).
 */
console.log(0 || "" || undefined || "Pedro" || NaN); // evalua el primer true
console.log(0 || "" || undefined || NaN); // Cuando no encuentra un true nos 
                                          // devuelve el último false

//Podemos utilizarlo para ubicar a alguien que pregunta
const beth = {
    firstname : "Karen",
    lastname: "Katwhite",
    city: "Xelaju",
    state: "Quetzaltenango",
    age: 33,
    class: "Senior",
    ACT: 33,
    colleges: ["Universidad Altense", "Liceo Platero", "Mis trocitos"]
};
const studentTEST = beth.TEST  // || 'El dato no existe ';
console.log(studentTEST); // el atributo esta undefined, debemos decirle al usuario el problema
                          // descomenta la linea 31
beth.TEST2 = 1500;
const studentTEST2 = beth.TEST2 || "El dato no existe";
console.log(studentTEST2);

//Otro ejemplo ||
let nombre = '';
let username = nombre || 'Anonimo';
console.log(username); // recuerda evalúa el primer true
nombre = 'Juanito';
username = 'Juanito' || 'Anonimo';
console.log(username);

//Otro ejemplo &&, evalúa el último true siempre y cuando pueda llegar
function primerValor() {
    console.log('soy  primerValor');
    return true; // cambialo por false, juega con segundoValor
}
function segundoValor() {
    console.log('soy segundoValor');
    return true; // cambialo por false, juega con primerValor
}
let valorEvaluado = primerValor() && segundoValor();
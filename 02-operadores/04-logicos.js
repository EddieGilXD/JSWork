/** Operadores lógicos AND, OR, NOT
 * AND ---> &&
 * OR  ---> ||
 * NOT ---> !
 */
//************** AND ---> && *********************** */
let estudia = true;   // true, true,  false, false
let practica = true;  // true, false,  true, false
console.log('Se supera (&&) : ', estudia && practica);

//************** OR ---> || *********************** */
let tengoNumeroDpi = true; // true, true,  false, false
let tengoNumeroNit = true; // true, false,  true, false
console.log('Puedo encontrarlo en la Base de Datos BD (||):', tengoNumeroDpi || tengoNumeroNit);

//************** NOT ---> ! *********************** */
let siPeroNo = true; // false
console.log('Si pero no, que no que si:', !siPeroNo);
let edad = 18;
if (edad >= 18) {
    console.log("Es mayor de edad"); // explicar el tabulado
} else { // recuerda que else es opcional, pero muy, muy, útil
    console.log("Es menor de edad");
}

let hora = 14;

if (hora < 12) {  // la primera concición que 
    //se cumpla es la que se ejecuta,
    // lo demás se ignora.
console.log("Buenos días");
} else if (hora < 18) {
console.log("Buenas tardes");
} else {
console.log("Buenas noches");
}
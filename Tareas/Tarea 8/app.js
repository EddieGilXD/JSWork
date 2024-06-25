/* Funcion para crear una cuenta bancaria*/

function crearCuentaBancaria(saldoInicial){
    var saldo = saldoInicial;

    function depositar(cantidad) {
        if (cantidad > 0) {
            saldo += cantidad;
        } else {
            console.log("La cantidad a depositar debe ser mayor a cer. ");
        }
    }


    // Metodo privado para retirar dinero
    function retirar(cantidad){
        if (cantidad > 0 && cantidad <= saldo){
            saldo -= cantidad;
        } else {
            console.log("La cantidad a retirar debe ser mayor a cero y no exceder el saldo disponible. ");
        }
    }

    // Retornamos un objeto con metodos publicos
    return {
        consultarSaldo: function() {
            return saldo;
        },
        realizarDeposito: function(cantidad){
            depositar(cantidad);
        },
        realizarRetiro: function(cantidad) {
            retirar(cantidad);
        }
    }
}

var miCuenta = crearCuentaBancaria(1000);
console.log("Saldo inicial: " + miCuenta.consultarSaldo());
miCuenta.realizarDeposito(500);
console.log("Saldo despues del deposito: " + miCuenta.consultarSaldo());
miCuenta.realizarRetiro(200);
console.log("Saldo despues del retiro: " + miCuenta.consultarSaldo());
// Intento de acceder a metodos privados (no funcionara)

//A continuacion se presenta un ejemplo de como manjear excepciones en JavaScript utlizando el bloque try..catch
try{//El codigo dentro del try se ejecuta. Si no hay errores el bloque catch se omite
miCuenta.realizarDeposito(100);
} catch (e) {//el parametro e es una referencia al objeto exception que fue lanzado
    console.log(e.message);
}
try{ 
    miCuenta.retirar(100);    
}catch (e) {
    console.log(e.message);
}

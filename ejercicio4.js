// Numeros pares o impares

function verificarNumero(numero) {
    if (isNaN(numero)) {
        console.log(`"${numero}" no es un número válido.`);
        return;
    }

    if (numero % 2 === 0) {
        console.log(`${numero} es un número PAR ✅`);
    } else {
        console.log(`${numero} es un número IMPAR 🔹`);
    }
}

// Pedir número por consola
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite un número: ', (num) => {
    verificarNumero(Number(num));
    readline.close();
});
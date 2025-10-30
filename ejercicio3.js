// Ejercicio 3: pares e impares del 1 al 30
let pares = [];
let impares = [];

// mirar numeros del 1-30
for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  } else {
    impares.push(i);
  }
}

//bmostra resultados 
console.log("Números pares: " + pares.join(", "));
console.log("Números impares: " + impares.join(", "));

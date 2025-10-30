let nombre = "Thomas";
let materianota1 = 4.2; 
let materianota2 = 3.8; 
let materianota3 = 3.7; 

//promedio 
let promedio = (materianota1 + materianota2 + materianota3) / 3;

//reultados 
console.log("Nombre: " + nombre);
console.log("nota1: " + materianota1 );
console.log("nota2: " + materianota2);
console.log("nota3: " + materianota3 );
console.log("Promedio: " + promedio.toFixed(2));

//verificar si aprobo 
if (promedio >= 3.5) {
  console.log("Aprobó, ¡felicidades!");
} else {
  console.log("No aprobó, ¡suerte a la proxima!");
}

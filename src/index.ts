let nombre: string = string(prompt("Ingrese nombre"));
let notaPractica: number = Number(prompt("Ingrese la nota parte practica"));
let notaPoblemas: number = Number(prompt("Ingrese nota parte Problemas"));
let notaTeoria: number = Number(prompt("Ingrese nota Teoria"));

let notaResultado: number = 0 < 10;

if (nombre !== "") {
  while ((notaPractica, notaPoblemas, notaTeoria <= 10)) {
    notaResultado =
      Number(notaPractica * 0.1) + notaPoblemas * 0.5 + notaTeoria * 0.4;
    console.log("La nota final es", notaResultado);
    break;
  }
} else {
  console.log("Error en el ingreso de datos");
}

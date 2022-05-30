let nombre: string = prompt("Ingrese nombre");
let notaPractica: number;
let notaProblemas: number;
let notaTeoria: number;
let notaResultado: number;

while (nombre !== "") {
  notaPractica = Number(prompt("Ingrese la nota parte practica"));
  notaProblemas = Number(prompt("Ingrese nota parte Problemas"));
  notaTeoria = Number(prompt("Ingrese nota Teoria"));

  if (
    notaPractica >= 0 &&
    notaPractica <= 10 &&
    notaProblemas >= 0 &&
    notaProblemas <= 10 &&
    notaTeoria >= 0 &&
    notaTeoria <= 10
  ) {
    notaResultado = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeoria * 0.4;
    console.log("NOTA RESULTADO DEL ALUMNO ", nombre, " ES ", notaResultado);
  } else {
    console.log("ERROR ALGUNA DE LAS NOTAS ES INVALIDA");
  }
  nombre = prompt("Ingrese nombre");
}

console.log("FIN DEL CODIGO");

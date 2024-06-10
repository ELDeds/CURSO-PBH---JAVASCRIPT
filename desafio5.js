let readlineSync = require("readline-sync");

let a = readlineSync.question("Primeiro valor de Soma: ");
let b = readlineSync.question("Segundo valor de Soma: ");


function Soma(a, b) {
    return parseFloat(a) + parseFloat(b);

}
console.log(Soma(a, b));


function Sub(c, d) {
    return parseFloat(c) - parseFloat(d);

}

let c = readlineSync.question("Primeiro valor de Sub: ")
let d = readlineSync.question("Segundo valor de Sub: ")
console.log(Sub(c, d));
/*
O código foi refatorado. O professor não abordou conceitos como a importância do parseFloat para uma base de calculadora, aprofundei e aprimorei o código.
*/
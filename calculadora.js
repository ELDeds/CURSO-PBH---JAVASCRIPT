let readlineSync = require("readline-sync");

let a = readlineSync.question("Digite o primeiro valor: ");
let b = readlineSync.question("DIgite o segundo valor: ");
let calculadora = readlineSync.question("Escolha a operacao: ");
let r;
switch (calculadora) {
    case "+":
        r = parseInt(a) + parseInt(b);
        console.log(r);
        break;

    case "-":
        r = a - b;
        console.log(r);
        break;

    case "*":
        r = a * b;
        console.log(r);
        break;

    case "/":
        r = a / b;
        if (b == 0) {
            console.log("Divisão por 0 não é possível");

        }
        else {
            console.log(r);

        }
        break;
    default:
        console.log("Opção Invalida.")
}
let readlineSync = require ("readline-sync");

let hora = 15;

if (hora >= 18) {
    console.log("Boa noite");
} else if (hora > 12 && hora < 18) {
    console.log("Boa tarde");
} else {
    console.log("Bom dia");

}
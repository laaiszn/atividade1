let teclado = require(`prompt-sync`)();

let temp: number = parseInt(teclado (`Digite a temperatura a ser convertida: `));

let tempconvertida: number =  (temp * (9/5)) + 32;
console.log (`a temperatura convertida é ${tempconvertida}`)
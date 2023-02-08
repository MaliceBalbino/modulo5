const readlineSync= require ('readline-sync');
const palavra = []
let input = ""

while (input != "sair") {
   palavra.push(input)
   input= readlineSync.question('digite uma propriedade css: ');
};

console.log( palavra.sort().join("\n"));
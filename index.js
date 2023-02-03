readlineSync= require ('readline-sync');
const palavra = []
const input = ""

while (input != "sair") {
   palavra.push(input)
    
input= readlineSync.question('digite uma propriedade css');

};
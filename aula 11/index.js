let num1 = prompt("Digite o primeiro Numero");
let num2 = prompt("Digite o segundo Numero");
console.log("NUMERO SEM CONVERTER PARA NUMERO");
console.log("variavel num1 é do tipo: ",typeof num1);
console.log("variavel num2 é do tipo: ",typeof num2);
num1 = Number(num1);
num2 = Number(num2);
let resultado = num1 + num2;
console.log("NUMERO CONVERTIDO")
console.log("variavel num1 é do tipo: ",typeof num1);
console.log("variavel num2 é do tipo: ",typeof num2);
window.alert(`O resultado da conta é: ${resultado}`);
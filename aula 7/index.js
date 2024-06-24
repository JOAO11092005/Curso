/**
 *            COMPARANDO O LET COM CONST 
 * 
 * Variavel let pode ser alterada 
 * Variavel const não pode ser alterado 
 */


let nome = 'Joao Paulo';
//declarei uma variavel com um valor 
console.log(nome,' Tudo Bem ?'); //mostrei o meu nome 

nome = 'Joao'; //tentando mudar o valor 
console.log(nome) //mostrando se o valor foi alterado

const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(typeof resultado);
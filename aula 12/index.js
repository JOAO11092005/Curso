let varA = 'A'; //B 
let varB = 'B'; //C
let varC = 'C'; //A
let varD = 'A'; //não pode criar outra variavel

[varA , varB , varC] = [varB , varC , varA];
//varA = varB;
//varB = varC;
//varC = varD; //não pode subscrever 

console.log(varA , varB, varC);
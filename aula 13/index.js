let umaString = "O rato roeu a roupa do rei de roma.";

// A função charAt() retorna o caractere no índice especificado.
console.log(umaString.charAt(4)); // "a"

// concat() concatena uma ou mais strings com a string original.
console.log(umaString.concat(' para', ' um dia', ' muito lindo')); // "O rato roeu a roupa do rei de roma. para um dia muito lindo"
console.log(umaString + " Para um dia muito lindo"); // "O rato roeu a roupa do rei de roma. Para um dia muito lindo"
console.log(`${umaString} Um dia muito lindo`); // "O rato roeu a roupa do rei de roma. Um dia muito lindo"

// search() procura uma substring ou uma expressão regular e retorna o índice da primeira correspondência.
console.log(umaString.search(/e/)); // 7

// replace() substitui a primeira ocorrência de uma substring ou expressão regular por uma nova string.
console.log(umaString.replace('Um', 'Fiz um')); // "O rato roeu a roupa do rei de roma."

// Com o atributo "g" (global), replace() substitui todas as ocorrências da expressão regular.
console.log(umaString.replace(/r/g, '#')); // "O #ato #oeu a #oupa do #ei de #oma."

// length retorna o número de caracteres na string.
console.log(umaString.length); // 34

// slice() extrai uma parte da string e retorna a nova substring.
// Usando índices negativos para contar de trás para frente.
console.log(umaString.slice(-5, -1)); // "roma"

// Extrai a parte da string a partir do índice 30 até o final.
console.log(umaString.slice(30)); // "roma."

// split() divide a string em um array de substrings com base no separador fornecido.
// Aqui, divide a string em substrings de um caractere e pega os dois primeiros caracteres.
console.log(umaString.split('', 2)); // ["O", " "]

// Nota: Se colocar 'r' como separador no split, ele remove todos os 'r' e retorna as partes da string.


console.log(umaString.toUpperCase)//deixa a frase toda em maiuscula.
console.log(umaString.toLowerCase)//deixa a frase toda em minuscula.
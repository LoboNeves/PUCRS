//Exemplo de uso do Array

//Criando um Array
var array1 = [1,2,3,4,5,6,7,8,9,10];

//Imprimindo o Array
console.log("Array: " + array1);

//Imprimindo o tamanho do Array
console.log("Tamanho do Array: " + array1.length);

//Imprimindo o valor de uma posição do Array
console.log("Valor da posição 1: " + array1[0]);

//Imprimindo todos os valores do Array
for(var i = 0; i < array1.length; i++){
    console.log("Valor da posição " + i + ": " + array1[i]);
}

//Usando Array.some() para verificar se existe algum valor negativo no Array
if(array1.some(function(value){
    return value < 0;
})){
    console.log("Existe um valor negativo no Array");
}

//Usando Array.every() para verificar se todos os valores do Array são positivos
if(array1.every(function(value){
    return value > 0;
})){
    console.log("Todos os valores do Array são positivos");
}

//Usando Array.filter() para filtrar os valores pares do Array
var array2 = array1.filter(function(value){
    return value % 2 === 0;
});

//Imprimindo o Array filtrado
console.log("Array filtrado com somente valores pares: " + array2);

//Usando Array.map() para mapear os valores do Array
var array3 = array1.map(function(value){
    return value * 2;
});

//Imprimindo o Array mapeado
console.log("Array mapeado: " + array3);

//Usando Array.reduce() para somar todos os valores do Array
var sum = array1.reduce((total, value) =>
     total + value
, 0);

//Imprimindo o valor da soma do Array
console.log("Soma do Array: " + sum);

//Usando Array.forEach() para iterar sobre todos os valores do Array
array1.forEach( (item) =>
    console.log("Valor do Array: " + item)
);
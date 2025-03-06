//Exemplo de uso do Set

//Criando um Set
var set1 = new Set();

//Inserindo itens no Set
set1.add(1);
set1.add(2);
set1.add(3);
set1.add(4);
set1.add(5);
set1.add(1);
set1.add(2);
set1.add(3);

//Imprimindo o Set
console.log(set1);

//Usando Set.has() para verificar se um valor já existe no Set
if(set1.has(1)){
    console.log("O valor 1 já existe no Set");
}

//Usando Set.size para obter o tamanho do Set
console.log("Tamanho do Set: " + set1.size);

//Usando Set.delete() para remover um valor do Set
set1.delete(1);

//Imprimindo o Set
console.log(set1);
//Exemplo de uso do Map

//Criando um Map
var map1 = new Map();

//Inserindo itens no Map
map1.set("key1", 1);
map1.set("key2", 2);
map1.set("key3", 3);
map1.set("key4", 4);
map1.set("key5", 5);
map1.set("key1", 1);
map1.set("key2", 2);
map1.set("key3", 3);

//Imprimindo o Map
console.log(map1);

//Usando Map.has() para verificar se um valor já existe no Map
if(map1.has("key1")){
    console.log("O valor 1 já existe no Map");
}

//Usando Map.size para obter o tamanho do Map
console.log("Tamanho do Map: " + map1.size);

//Usando Map.delete() para remover um valor do Map
map1.delete("key5");

//Usando Map.get() para obter um valor do Map
console.log("O valor do Map para a chave key1 é: " + map1.get("key1"));
//Exemplo de uso do Queue

//Criando um Queue
class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(item){
        this.items.push(item);
    }

    dequeue(){
        this.items.shift();
    }

    print(){
        console.log(this.items);
    }
}

//Criando a instância da classe Queue
var queue = new Queue();

//Inserindo itens no Queue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

//Imprimindo o Queue
queue.print();

//Removendo itens do Queue
queue.dequeue();

//Imprimindo o Queue
queue.print();
//Exemplo de uso do Stack

//Criando um Stack
class Stack{
    constructor(){
        this.items = [];
    }

    push(item){
        this.items.push(item);
    }

    pop(){
        this.items.pop();
    }

    print(){
        console.log(this.items);
    }
}

// Criando a instância da classe Stack
var stack = new Stack();

// Inserindo itens no Stack
stack.push(1);
stack.push(2);
stack.push(3);

// Imprimindo o Stack
stack.print();

// Removendo itens do Stack
stack.pop();

// Imprimindo o Stack
stack.print();
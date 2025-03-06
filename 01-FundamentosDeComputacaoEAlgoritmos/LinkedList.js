//Exemplo de uso do LinkedList

//Criando um Node
class Node{
    constructor(item){
        this.item = item;
        this.next = null;
    }
}

//Criando um LinkedList
class LinkedList{
    constructor(){
        this.count = 0;
        this.head = null;
        this.tail = null;
    }

    insert(item){
        var node = new Node(item);

        if(this.count === 0){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }

        this.count++;
    }
    
    print(){
        var node = this.head;

        while(node){
            console.log(node.item);
            node = node.next;
        }
    }
}

//Criando a instância da classe LinkedList
var linkedList = new LinkedList();

//Inserindo itens no LinkedList
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);

//Imprimindo o LinkedList
linkedList.print();

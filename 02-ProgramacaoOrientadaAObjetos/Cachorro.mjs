// Exemplo de herança de classe representando um cachorro
import { Animal } from "./Animal.mjs";

export class Cachorro extends Animal {
    constructor(nome, cor, idade) {
        super(nome, cor, idade);
    }

    // Exemplo de polimorfismo sobrescrevendo a função da classe pai
    falar() {
        console.log(`${this.nome} está latindo`);
    }
}
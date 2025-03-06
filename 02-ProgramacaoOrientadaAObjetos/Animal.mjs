// Exemplo de classe simples gerênica representando um animal

export class Animal {
    #_nome;
    #_cor;
    #_idade;

    constructor(nome, cor, idade) {
        this.#_nome = nome;
        this.#_cor = cor;
        this.#_idade = idade;
    }

    get nome() {
        return this.#_nome;
    }

    get cor() {
        return this.#_cor;
    }

    get idade() {
        return this.#_idade;
    }

    comer() {
        console.log(`${this.nome} está comendo`);
    }

    falar() {
        console.log(`${this.nome} está fazendo um barulho`);
    }
}
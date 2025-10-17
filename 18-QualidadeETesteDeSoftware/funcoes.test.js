const funcoes = require('./funcoes');

describe('Testes de funções', () => {

    test('Soma', () => {
        expect(funcoes.soma(2, 2)).toBe(4);
    });

    test('Subtração', () => {
        expect(funcoes.subtração(2, 2)).toBe(0);
    });

    test('Multiplicação', () => {
        expect(funcoes.multiplicacao(2, 2)).toBe(4);
    });

    test('Divisão', () => {
        expect(funcoes.divisao(2, 2)).toBe(1);
    });

    test('Sempre nulo', () => {
        expect(funcoes.sempreNulo()).toBeNull();
    });

    test('Codigo válido', () => {
        expect(funcoes.codigoValido(100)).toBeTruthy();
        expect(funcoes.codigoValido(999)).toBeTruthy();
        expect(funcoes.codigoValido(1000)).toBeFalsy();
    });

    test('Inverter string', () => {
        expect(funcoes.inverterString('abc')).toEqual('cba');
    });

    test('[Promise] Busca usuário 1', () => {
        expect.assertions(1);
        return funcoes.buscaUsuario1().then(response => {
            expect(response.name).toEqual('Leanne Graham');
        });
    });

    test('[AsyncAwait] Busca usuário 1', async () => {
        expect.assertions(1);
        const response = await funcoes.buscaUsuario1();
        expect(response.name).toEqual('Leanne Graham');
    });
    
});

const casoInversaoStrings = [['abc', 'cba'], ['123', '321'], ['1234', '4321']];
describe('Inversão de strings', () => {
    test.each(casoInversaoStrings)(
        'Inversão de %p -> %p',
        (string, inversao) => {
        expect(funcoes.inverterString(string)).toEqual(inversao);
    });
});


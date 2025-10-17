const axios = require('axios');

const funcoes = {

    soma: (a, b) => {
        return a + b;
    },

    subtração: (a, b) => {
        return a - b;
    },

    multiplicacao: (a, b) => {
        return a * b;
    },

    divisao: (a, b) => {
        return a / b;
    },

    sempreNulo: () => null ,

    codigoValido: function (codigo) {
        if (codigo >= 100 && codigo <= 999) {
            return true;
        } else {
            return false;
        }
    },

    inverterString: function (string) {
        return string.split('').reverse().join('');
    },

    funcaoNaoTestada: (x) => x + 1,

    buscaUsuario1: () => {
        return axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.data)
            .catch(error => console.log(error));
    },
    
}

module.exports = funcoes;
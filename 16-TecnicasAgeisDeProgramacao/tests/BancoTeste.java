package br.com.banco;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.BeforeEach;
import org.junit.jupiter.api.Test;

class BancoTeste {

    ContaBancaria conta;

    @BeforeEach
    void setUp() {

        conta = new ContaBancaria(600);
    }

    @Test
    void temSaldoAposSaque() {

        conta.saque(200);
        assertTrue(conta.temSaldo());
    }
    
    @Test
    void temSaldoParaRealizarSaque() {

        conta.saque(200);
        assertEquals(400, conta.getSaldo());
    }

    @Test
    void saqueAcimaDoLimiteMaximo() {

        conta.saque(501);
        assertEquals(600, conta.getSaldo());
    }

}
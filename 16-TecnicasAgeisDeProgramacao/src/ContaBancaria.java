package br.com.banco;

public class ContaBancaria {

    private int saldo;

    public ContaBancaria(int saldo) {
        this.saldo = saldo;
    }

    public void saque(int valor) {
        if (valor <= 500) {
        this.saldo -= valor;
        }
        else {
            throw new IllegalArgumentException("Valor acima do limite");
        }
    }

    public boolean temSaldo() {
        return this.saldo > 0;
    }

    public int getSaldo() {
        return this.saldo;
    }

}
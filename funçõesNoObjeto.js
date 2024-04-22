const pessoa = {
    nome:"Miguel",
    idade: 6,
    ocupação: "gato",

    saldo:0,

    deposito: function depositar(valor) {

        this.saldo += valor
        
    }

}

pessoa.deposito(50);
pessoa.deposito(50);
pessoa.deposito(50);
pessoa.deposito(50);
pessoa.deposito(50);

console.log(pessoa.saldo);
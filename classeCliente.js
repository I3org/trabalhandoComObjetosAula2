class cliente {
constructor(nome, email, cpf, saldo){
     this.nome = nome
     this.email = email
     this.cpf = cpf
     this.saldo = saldo
    };

    depositar (valor){
        this.saldo += valor
    };

    exibirSaldo(){
        console.log(this.saldo);
    };

};

const shiva = new cliente ('shiva', 'shiva@shiva', 11122233344, 144);

shiva.exibirSaldo();

console.log(shiva);
function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = parseFloat(saldo).toFixed(2); // Fixando o saldo com duas casas decimais
    this.depositar = function (valor) {
        this.saldo = (parseFloat(this.saldo) + valor).toFixed(2); // Mantendo o saldo com duas casas decimais após a operação de depósito
    };
};


function clientePoup (nome, cpf, email, saldo , saldoPoup ) {
    cliente.call(this,nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup    
};

const melita = new clientePoup ('melita', 12345678901, 'melita@melita', 14.98, 500);

console.log(melita);

clientePoup.prototype.depositarPoup = function (valor) {
    this.saldoPoup = (parseFloat(this.saldoPoup + valor).toFixed(2))
};
melita.depositar(10);
melita.depositarPoup(25);

console.log(melita);

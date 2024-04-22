function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = parseFloat(saldo).toFixed(2); // Fixando o saldo com duas casas decimais
    this.depositar = function (valor) {
        this.saldo = (parseFloat(this.saldo) + valor).toFixed(2); // Mantendo o saldo com duas casas decimais após a operação de depósito
    }
}

const melita = new cliente('melita', 12345678901, 'melita@melita', 14.98);

console.log(melita);

melita.depositar(25); // Chamar a função depositar a partir do objeto melita

console.log(melita);

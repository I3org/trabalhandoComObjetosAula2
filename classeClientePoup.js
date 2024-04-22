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

class clientePoup extends cliente {
    constructor(nome, email, cpf, saldo, saldoPoup){
    super(nome, email, cpf, saldo)
    this.saldoPoup = saldoPoup
    }
    depositarPoup (valor){
        this.saldoPoup += valor
    };
};

const tutu = new clientePoup ('tutu', 'tutu@tutu', 11122233344, 100, 150);

console.log(tutu);

tutu.depositarPoup(50);

console.log(tutu.saldoPoup);    
const pessoa = {
    nome:"Miguel",
    idade: 6,
    ocupação: "gato",
    endereço: [{
        rua:"helio manzoni",
        numero: 46,
        complemento: "apto.92",
        cep:"07092-070",        
    }]
};


pessoa.endereço.push ({
    rua:"mandaguari",
    numero:57,
    complemento:"" ,
    cep:"07122-110",
})

console.log(pessoa.endereço[1].cep);

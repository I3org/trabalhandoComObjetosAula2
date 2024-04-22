//forma basica de um objeto


const pessoa = {
    nome:"Miguel",
    idade: 6,
    ocupação: "gato",
}

//adicionando um novo objeto a um objeto ja existente

pessoa.endereço = {
    rua:"helio manzoni",
    numero: 46,
    complemento: "apto.92",
    cep:"07092-070",        
};

console.log(pessoa);

//alterando o valor dentro do objeto secundario

pessoa.endereço.numero = 92;

console.log(pessoa);
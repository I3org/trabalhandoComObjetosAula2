//forma basica de um objeto


const endereço = {
    rua:"helio manzoni",
    numero: 46,
    complemento: "apto.92",
    cep:"07092-070",        
};

const pessoa = {
    nome:"Miguel",
    idade: 6,
    endereço:endereço,
    ocupação: "gato",
}

console.log(pessoa);
//adição de informação
pessoa.telefone = 99896545;

console.log(pessoa);

//modificação de informação
pessoa.telefone = 'batatinha';

console.log(pessoa);

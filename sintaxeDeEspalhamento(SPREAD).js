
const pessoa = {
    nome:"Miguel",
    idade: 6,
    ocupação: "gato",
};

const endereço = {
    rua:"helio manzoni",
    numero: 46,
    complemento: "apto.92",
    cep:"07092-070",        
};

const tudoJunto = {
    ...pessoa,
    ...endereço
};

console.log(tudoJunto);
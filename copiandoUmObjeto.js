

const pessoa = {
    nome:"Miguel",
    idade: 6,
    ocupação: "gato",
}

const pessoa2 = Object.create(pessoa);


// pessoa2.nome="Miguiu";

console.log(pessoa);
console.log(pessoa2);
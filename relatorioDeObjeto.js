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

let relatorio = ``;

for (let i in pessoa){
    if (typeof pessoa[i] === "object" || typeof pessoa[i] === "function"){
        continue
    }else{
        relatorio += `
        ${i} => ${pessoa[i]}
        `
    }
};

console.log(relatorio);
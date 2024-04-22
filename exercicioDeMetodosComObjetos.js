//declare uma mensagem para caso apresente uma caracteristica especifica


const pessoa = {
    nome:"Miguel",
    idade: 6,
    ocupação: "gato",
}

function issoÉUmGato (obj) {
    const propsPessoa = Object.values (obj);
    if (propsPessoa.includes("gato"))
    {
     console.log(`Parabens você é um gato ${obj.nome}`);   
    }else{
        console.log(`lamentamos informar que ${obj.nome} não é um gato`);
    }
};

issoÉUmGato(pessoa);


//criar um array de objetos de faixa de preco, para ser usado em um site igual merdado livre

// Primeira Opcao usando

let faixas =[
    {tooltip: "até R$ 700", minimo: 700},
    {tooltip: "de R$ 700 a R$ 1000", minimo: 700, maximo: 1000},
    {tooltip: "R$ 1000 ou mais", minimo: 1000, maximo: 9999999}
];

// Opcao usando Factory Function

function criaFaixaPreco (tooltip, minimo,maximo){
return{
    tooltip,
    minimo,
    maximo,
}

}

let faixa2 =[

    criaFaixaPreco ("a",1,100),
    criaFaixaPreco ("b",100,1000),
    criaFaixaPreco ("c",1000,10000),
]
    console.log(faixas);
    console.log (faixa2);
    




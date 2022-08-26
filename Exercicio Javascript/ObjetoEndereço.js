// Objeto Endereço
// Criar objeto endereco que contenha:
// Rua, Cidade, Cep , exibirEndereço(endereco)

let endereco = {
    Rua: " Maria ",
    Cidade: "Bauru",
    CEP: "17064-150",

};
function exibirEndereço(endereco) {
    for (let chave in endereco)
        console.log(chave, endereco[chave]);
}
exibirEndereço(endereco);

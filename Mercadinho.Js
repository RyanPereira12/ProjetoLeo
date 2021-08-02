var nomeProduto = [];
var valorProduto = [];
var Quantidade;

function cadastrar() {
    let nomeDosProdutos = document.getElementById("nomeProduto").value
    let valorDosProdutos = document.getElementById("valorProduto").value

    if (nomeDosProdutos && valorDosProdutos) {
        nomeProduto.push(nomeDosProdutos)
        valorProduto.push(valorDosProduto)
        let Tabela = document.getElementById("Tabela").innerHTML = "<tr><th> Nome Do Produto </th><th> Valor Do Produto </th></tr>"
        for (Quantidade = 0; Quantidade <= (nomeDosProdutos.length - 1); Quantidade++) {
            Tabela += "<tr><td>" + nomeProduto[Quantidade] + "</td><td>" + valorProduto[Quantidade] + "</td></tr>"
            document.getElementById("Tabela").innerHTML = Tabela
        }
    } else{
        alert("Preencha os campos")
    }
    document.getElementById("nomeProduto").value = ""
    document.getElementById("valorProduto").value = ""
}

var itens = 
function Salvar(){

    if(nomeUser){
        tabela += "<tr><td>" + "</td><td><button class= 'btn btn-success'>Editar</button> <button class='btn btn-danger'onclick='excluir(this.parentNode.rowIndex)'>Escluir</button></td></tr>";
        document.getElementById("tabela").innerHTML=tabela;
        document.getElementById("nomeUser").value = "";
   }else {
       alert (" Usuario favor preecher o campo nome ");
   }

}


   function excluir(i) {
         document.getElementById("tabela").deleterow(i);

   }

function Logar() {
    var LoginEmail = document.getElementById("Usuario").value;
    var LoginSenha = document.getElementById("Senha").value;


    if(!LoginEmail || !LoginSenha) {
        alert("favor preencha os campos para acessar o site"); 
    }else{
        console.log("chegou aqui");
        window.location.href = "Aula02.html";
    }
}
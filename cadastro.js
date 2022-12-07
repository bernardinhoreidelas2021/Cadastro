function validarDados() {
  if (validarNome() == true && validarIdade() == true && validarTelefone == true ) {
    alert("Solicitação enviada com sucesso")
  } else {
    alert("Erro para enviar a solicitação")
  }
} 
function validarIdade() {
  var idade = document.getElementById("idade");
  if (idade.value < 18) {
    alert("Idade abaixo da permitida")
    idade.focus()
    return false
  } else {
    return true
  }
}
function validarNome() {
  var nome = document.getElementById("name");
  if (nome.value == "" ) {
    alert("Nome não informado");
    nome.focus();
    return false
  } else {
    return true
  }

} 
function validarTelefone() {
  var telefone = document.getElementById("telefone");
  if(telefone.value == "") {
    alert("Telefone não informado");
    telefone.focus();
    return false
  } else {
    return true
  }
}

const botao_red_log = document.getElementById("acesso_paraLog");
if (botao_red_log) {
  botao_red_log.addEventListener('click', function() {
    window.location.href = "paginas_variantes/pagina_login.html";
  });
}

const botao_red_ong_log = document.getElementById("acessar_ongLog");
if (botao_red_ong_log) {
  botao_red_ong_log.addEventListener('click', function() {
    window.location.href = "paginas_variantes/pagina_login.html";
  });
}

const botao_criaconta = document.getElementById("acessar_criarConta");
if (botao_criaconta) {
  botao_criaconta.addEventListener('click', function() {
    window.location.href = "paginas_variantes/pag_criarconta.html";
  });
}
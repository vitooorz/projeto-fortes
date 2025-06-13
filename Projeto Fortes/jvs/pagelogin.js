// No arquivo pagelogin.js, substitua todo o conteúdo por:
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form_login");
  const emailInput = document.getElementById("email_login");
  const senhaInput = document.getElementById("senha_login");

  // Botão cancelar
  const cancelarBtn = document.getElementById("cancelar_pagLog");
  if (cancelarBtn) {
    cancelarBtn.addEventListener('click', function() {
      window.location.href = "../index.html";
    });
  }

  // Botão criar conta
  const criarContaBtn = document.getElementById("direc_criar");
  if (criarContaBtn) {
    criarContaBtn.addEventListener('click', function() {
      window.location.href = "../paginas_variantes/pag_criarconta.html";
    });
  }

  // Botão ajuda
  const ajudaBtn = document.getElementById("ajuda");
  if (ajudaBtn) {
    ajudaBtn.addEventListener('click', function() {
      alert("A conta do usuário será usada para melhor gestão de nossos clientes, entregando mais agilidade e eficácia no processamento de informações.");
    });
  }

  // Validação do login
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = emailInput.value;
      const senha = senhaInput.value;

      if (email === "cooperativas@fortes.com.br" && senha === "123456") {
        alert("Login autorizado!");
        window.location.href = "./cooperativa.html";
      } 
      else if (email === "admin@fortes.com.br" && senha === "123456") {
        alert("Login autorizado!");
        window.location.href = "../index.html";
      } 
      else if (email === "ong@fortes.com.br" && senha === "123456") {
        alert("Login autorizado!");
        window.location.href = "./homeong.html"
      }
      else if (email === "colaborador@fortes.com.br" && senha === "123456") {
        alert("Login autorizado!");
        window.location.href = "./homeong.html";
      }
      else {
        alert("Email ou senha incorretos!");
      }
    });
  }
});
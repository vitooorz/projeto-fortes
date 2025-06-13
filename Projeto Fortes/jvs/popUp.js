document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('meuModal');
    const fecharBtn = document.querySelector('.fechar-btn');
    const botao_cancela_criar = document.getElementById("voltar_log");
    const redefinirSenhaForm = document.getElementById('redefinirSenhaForm');
    const emailRecuperacaoInput = document.getElementById('emailRecuperacao');
    const novaSenhaGroup = document.getElementById('novaSenhaGroup');
    const confirmaNovaSenhaGroup = document.getElementById('confirmaNovaSenhaGroup');
    const novaSenhaInput = document.getElementById('novaSenha');
    const confirmaNovaSenhaInput = document.getElementById('confirmaNovaSenha');
    const submitFormBtn = document.getElementById('submitFormBtn');
    const emailRecuperacaoError = document.getElementById('emailRecuperacaoError');
    const novaSenhaError = document.getElementById('novaSenhaError');
    const confirmaNovaSenhaError = document.getElementById('confirmaNovaSenhaError');

    // Abrir modal automaticamente
    if (modal) {
        modal.style.display = 'flex';
    }

    // Função para voltar ao login
    function voltarLog() {
        window.location.href = "../paginas_variantes/pagina_login.html";
    }

    // Fechar modal
    if (fecharBtn) {
        fecharBtn.addEventListener('click', voltarLog);
    }

    if (botao_cancela_criar) {
        botao_cancela_criar.addEventListener('click', voltarLog);
    }

    // Validação do formulário
    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailRecuperacaoInput.value)) {
            emailRecuperacaoError.textContent = 'Por favor, insira um e-mail válido.';
            return false;
        }
        emailRecuperacaoError.textContent = '';
        return true;
    }

    function validatePassword() {
        if (novaSenhaInput.value.length < 6) {
            novaSenhaError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
            return false;
        }
        novaSenhaError.textContent = '';
        return true;
    }

    function validateConfirmPassword() {
        if (novaSenhaInput.value !== confirmaNovaSenhaInput.value) {
            confirmaNovaSenhaError.textContent = 'As senhas não coincidem.';
            return false;
        }
        confirmaNovaSenhaError.textContent = '';
        return true;
    }

    if (redefinirSenhaForm) {
        redefinirSenhaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const isEmailValid = validateEmail();
            let isPasswordValid = true;
            let isConfirmValid = true;
            
            if (novaSenhaGroup.classList.contains('hidden')) {
                if (isEmailValid) {
                    novaSenhaGroup.classList.remove('hidden');
                    confirmaNovaSenhaGroup.classList.remove('hidden');
                    submitFormBtn.textContent = 'Redefinir Senha';
                }
            } else {
                isPasswordValid = validatePassword();
                isConfirmValid = validateConfirmPassword();
                
                if (isEmailValid && isPasswordValid && isConfirmValid) {
                    alert('Senha redefinida com sucesso!');
                    voltarLog();
                }
            }
        });
    }
});
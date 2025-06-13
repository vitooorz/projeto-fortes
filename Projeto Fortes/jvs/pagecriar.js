    document.addEventListener('DOMContentLoaded', function() {
    const cadastroForm = document.getElementById('cadastroForm');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const confirmaSenhaInput = document.getElementById('confirmaSenha');

    const nomeError = document.getElementById('nomeError');
    const emailError = document.getElementById('emailError');
    const senhaError = document.getElementById('senhaError');
    const confirmaSenhaError = document.getElementById('confirmaSenhaError');

    function showError(element, message) {
        element.textContent = message;
        element.previousElementSibling.classList.add('invalid'); // Adiciona classe 'invalid' ao input
    }

    function clearError(element) {
        element.textContent = '';
        element.previousElementSibling.classList.remove('invalid'); // Remove classe 'invalid' do input
    }

    // Validação do nome
    function validateNome() {
        if (nomeInput.value.trim() === '') {
            showError(nomeError, 'O nome completo é obrigatório.');
            return false;
        } else {
            clearError(nomeError);
            return true;
        }
    }

    // Validação do e-mail
    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            showError(emailError, 'O e-mail é obrigatório.');
            return false;
        } else if (!emailRegex.test(emailInput.value)) {
            showError(emailError, 'Por favor, insira um e-mail válido.');
            return false;
        } else {
            clearError(emailError);
            return true;
        }
    }

    // Validação da senha
    function validateSenha() {
        if (senhaInput.value.length < 6) {
            showError(senhaError, 'A senha deve ter pelo menos 6 caracteres.');
            return false;
        } else {
            clearError(senhaError);
            return true;
        }
    }

    // Validação da confirmação de senha
    function validateConfirmaSenha() {
        if (confirmaSenhaInput.value.trim() === '') {
            showError(confirmaSenhaError, 'A confirmação de senha é obrigatória.');
            return false;
        } else if (confirmaSenhaInput.value !== senhaInput.value) {
            showError(confirmaSenhaError, 'As senhas não coincidem.');
            return false;
        } else {
            clearError(confirmaSenhaError);
            return true;
        }
    }

    nomeInput.addEventListener('input', validateNome);
    nomeInput.addEventListener('blur', validateNome);

    emailInput.addEventListener('input', validateEmail);
    emailInput.addEventListener('blur', validateEmail);

    senhaInput.addEventListener('input', validateSenha);
    senhaInput.addEventListener('blur', validateSenha);

    confirmaSenhaInput.addEventListener('input', validateConfirmaSenha);
    confirmaSenhaInput.addEventListener('blur', validateConfirmaSenha);
    
    senhaInput.addEventListener('input', validateConfirmaSenha); 


    cadastroForm.addEventListener('submit', function(event) {
    event.preventDefault();

        const isNomeValid = validateNome();
        const isEmailValid = validateEmail();
        const isSenhaValid = validateSenha();
        const isConfirmaSenhaValid = validateConfirmaSenha();

        if (isNomeValid && isEmailValid && isSenhaValid && isConfirmaSenhaValid) {
            alert('Cadastro realizado com sucesso! (Ainda não há backend para salvar dados)');
            // Aqui você enviaria os dados para um servidor (usando Fetch API ou XMLHttpRequest)
            // Exemplo de como você obteria os dados:
            const dadosCadastro = {
                nome: nomeInput.value,
                email: emailInput.value,
                senha: senhaInput.value // Em um ambiente real, NUNCA envie senhas em texto puro!
                                        // Sempre use hashing e HTTPS.
            };
            console.log('Dados a serem enviados:', dadosCadastro);

            // Redirecionar para uma página de sucesso, se desejar
            // window.location.href = "sucesso.html";
            
            // Ou resetar o formulário
            cadastroForm.reset();
        } else {
            alert('Por favor, corrija os erros no formulário.');
        }
    });
});
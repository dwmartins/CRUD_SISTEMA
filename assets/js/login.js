const email = document.getElementById("email");
const senha = document.getElementById("senha");
const formulario = document.querySelector("form");
const validacoes = document.querySelector(".validacoes")

formulario.addEventListener('submit', function(e) {
    if(email.value == '') {
        e.preventDefault();
        validacoes.innerHTML = `<div class=" mx-auto alert alert-danger d-flex align-items-center w-50 " role="alert">
                                    <i class="bi bi-exclamation-triangle-fill me-2"></i>
                                    <div>
                                        Preencha seu e-mail!
                                    </div>
                                </div>`
        email.focus()

    } else if(senha.value == '') {
        e.preventDefault();
        validacoes.innerHTML = `<div class=" mx-auto alert alert-danger d-flex align-items-center w-50 " role="alert">
                                    <i class="bi bi-exclamation-triangle-fill me-2"></i>
                                    <div>
                                        Preencha sua senha!
                                    </div>
                                </div>`
        senha.focus()
        
    } else {
        alert("Login efetuado com sucesso!")
    }
})

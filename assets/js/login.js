const email = document.getElementById("email");
const senha = document.getElementById("senha");
const formulario = document.querySelector("form");
const validacoes = document.querySelector(".validacoes");

formulario.addEventListener('submit', function(e) {
    if(email.value == '') {
        e.preventDefault();
        validacoes.innerHTML = `<div data-aos="zoom-in" id="alerta" class=" mx-auto alert alert-danger d-flex align-items-center w-75 " role="alert">
                                    <i class="bi bi-exclamation-triangle-fill me-2"></i>
                                    <div>
                                        Preencha seu e-mail!
                                    </div>
                                </div>`
        email.focus()
        setTimeout(destroiAlerta, 3000);

    } else if(senha.value == '') {
        e.preventDefault();
        validacoes.innerHTML = `<div data-aos="zoom-in" id="alerta" class=" mx-auto alert alert-danger d-flex align-items-center w-75 " role="alert">
                                    <i class="bi bi-exclamation-triangle-fill me-2"></i>
                                    <div>
                                        Preencha sua senha!
                                    </div>
                                </div>`
        senha.focus()
        setTimeout(destroiAlerta, 3000);
    }
})

const alerta = document.getElementById("alerta");
function destroiAlerta() {
    validacoes.innerHTML = '';
}

const icon_senha = document.getElementById("icon_senha");

icon_senha.addEventListener("click", function() {
    if(senha.type == "password") {
        senha.type = "text";
        icon_senha.classList.remove('bi-eye');
        icon_senha.classList.add('bi-eye-slash')
    }else {
        icon_senha.classList.remove('bi-eye-slash');
        icon_senha.classList.add('bi-eye')
        senha.type = "password";
    }
})
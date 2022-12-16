<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="imagex/png" href="./assets/icons/logo-icon.ico">
    <title>Entrar</title>

    <link rel="stylesheet" href="./assets/css/style.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>
<body class="position-relative">

    <div class="validacoes position-absolute w-100 mt-4">
        <!-- Alertas -->
    </div>
   
    <section class="tela_logar d-flex align-items-center justify-content-center">
        <form class="form_logar flex-column  d-flex align-items-center" action="#" method="POST">

            <img src="./assets/img/logo-1.png" alt="Logo">
            <h6>ENTRAR</h6>

            <div class="d-flex align-items-center">
                <input type="text" name="email" placeholder="Seu e-mail" id="email">
                <i id="icon_email" class="bi bi-person icon_user"></i>
            </div>
            
            <div class="d-flex aling-items-center">
                <input type="password" name="senha" placeholder="Sua senha" id="senha">
                <i id="icon_senha" class="bi bi-eye"></i>
            </div>

            <button>ENTRAR</button>

            <span>Não possui conta? <a href="#">Criar conta</a></span>

        </form>
    </section>

    <script src="./assets/js/login.js"></script>
    <script>
        AOS.init();
    </script>
</body>
</html>
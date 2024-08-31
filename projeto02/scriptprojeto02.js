const formOpenBtn = document.querySelector("#form-open"),
      home = document.querySelector(".home"),
      formContainer = document.querySelector(".form_container"), // Corrigido de from_container para form_container
      formCloseBtn = document.querySelector(".form_close"),
      signupBtn = document.querySelector("#signup"),
      loginBtn = document.querySelector("#login"),
      pwShowHide = document.querySelectorAll(".pw_hide");

// Abre o formulário
formOpenBtn.addEventListener("click", () => {
    home.classList.add("show");
});

// Fecha o formulário
formCloseBtn.addEventListener("click", () => {
    home.classList.remove("show");
});

// Mostrar/esconder senha
pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

// Alterna para o formulário de cadastro
signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active"); // Corrigido de fromContainer para formContainer
});

// Alterna para o formulário de login
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active"); // Corrigido de fromContainer para formContainer
});

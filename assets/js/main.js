/* Mascará de formatação para formulário */
$(document).ready(function () {
  $("#cnpj").mask("00.000.000/0000-00")
  $("#telefone").mask("(00) 00000-0000")
})

/* Animação de pré-carregamento do site */
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none"
    document.getElementById("content").classList.remove("hidden")
  }, 2000) // Simulando um carregamento de 2 segundos
})

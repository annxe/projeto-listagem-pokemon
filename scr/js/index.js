const botaoAlterarTema = document.getElementById("alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./scr/imagens/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./scr/imagens/moon.png");
  }
});

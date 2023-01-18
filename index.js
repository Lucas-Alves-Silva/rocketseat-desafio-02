let buttonImage = document.querySelector(".rotacao");
let buttonClose = document.querySelector(".fechar");
let sofaGirando = document.querySelector(".sofaGiro");
let sofaParado = document.querySelector(".sofaEstatico");

buttonImage.addEventListener("click", () => {
  buttonImage.classList.add("hide");
  buttonClose.classList.remove("hide");
  sofaParado.classList.add("hide");
  sofaGirando.classList.remove("hide");
  sofaGirando.src = "./img/sofa.gif";
});

buttonClose.addEventListener("click", () => {
  buttonClose.classList.add("hide");
  buttonImage.classList.remove("hide");
  sofaParado.classList.remove("hide");
  sofaGirando.classList.add("hide");
  sofaGirando.src = "./img/sofa.svg";
});
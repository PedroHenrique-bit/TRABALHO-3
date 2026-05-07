// script.js

function mostrarSurpresa(){

  document.getElementById("surpresa").style.display = "block";

  for(let i = 0; i < 30; i++){

    let coracao = document.createElement("div");

    coracao.innerHTML = "❤️";

    coracao.classList.add("coracao");

    coracao.style.left = Math.random() * 100 + "vw";

    coracao.style.bottom = "-20px";

    coracao.style.fontSize = (Math.random() * 30 + 20) + "px";

    document.body.appendChild(coracao);

    setTimeout(() => {
      coracao.remove();
    },4000);
  }

}
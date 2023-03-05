let btnCollum = document.querySelector('input[class="btn"]');
let camada = document.querySelector('section[class="infoNomeEnd fontPadrao"]');
let camada2 = document.querySelector(
  'section[class="infoDiasFunc fontPadrao"]'
);

btnCollum.addEventListener("click", (e) => {
  camada.style.flexDirection = "column";
  camada.style.height = "300px";
  camada2.style.flexDirection = "column";
  camada2.style.height = "500px";
});

camada.addEventListener("click", (e) => {
  console.log("teste");
});

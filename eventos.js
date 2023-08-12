const container = document.querySelector("#container");
container.addEventListener("click", alerta);

function alerta() {
  alert("Hola! Soy el div!");
};

const btn = document.querySelector("button");
btn.addEventListener("click", (event) => {
event.stopPropagation();
});
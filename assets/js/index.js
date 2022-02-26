var contenido_logo = document.querySelector("#arriba");
contenido_logo.addEventListener("click", function (event) {
  document.getElementById("header").scrollIntoView();
});

var mediaqueryTable = window.matchMedia("(min-width: 768px)");
var mediaqueryPc = window.matchMedia("(min-width: 1024px)");

var navVisible = document.querySelector("#navVisible");
var btnArriba = document.querySelector(".arriba");
var logo__titulo = document.querySelector("#logo__titulo");
var navContacto = document.querySelector("#navContacto");

/* Queries Para Table */
if (mediaqueryTable.matches) {
  btnArriba.classList.remove("invisible");
  logo__titulo.classList.remove("invisible");
  navContacto.classList.add("visible");
  navVisible.classList.add("invisible");
} else {
}

/* Queries Para Laptop */
if (mediaqueryPc.matches) {
  navVisible.classList.remove("invisible");
  navContacto.classList.add("invisible");
} else {
}

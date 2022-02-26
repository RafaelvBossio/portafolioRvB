var contenido_logo = document.querySelector("#arriba");
contenido_logo.addEventListener("click", function(event){
    document.getElementById('header').scrollIntoView();
});

var p = document.querySelector("#p");
console.log(p.textContent.length)

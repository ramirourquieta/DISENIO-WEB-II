document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });

ScrollReveal().reveal('.alpha', { delay: 200 });
ScrollReveal().reveal('.Perifericos', { delay: 500 });
ScrollReveal().reveal('.Banner1', { delay: 500 });
ScrollReveal().reveal('.Banner2', { delay: 500 });

function saludar(){
    alert("BIENVENIDO A PERIPHERALS DONDE USTED PODRA COTIZAR LOS MEJORES PERIFERICOS PARA SU COMPUTADORA")
};



/* buscador*/

document.getElementById("icono-search").addEventListener("click", mostrar_buscador)
document.getElementById("cubrir-search").addEventListener("click", ocultar_buscador)


varbuscador = document.getElementById("caja-buscador");
cubrirsearch = document.getElementById("box-search");
inputbuscar = document.getElementById("botonbuscar");
cajahist = document.getElementById("box-search");



function mostrar_buscador () {

  varbuscador.style.top = "80px";
  cubrirsearch.style.top = "146px";
  inputbuscar.focus();
}


function ocultar_buscador(){
  varbuscador.style.top= "-100px";
  cubrirsearch.style.top= "-200px";
  botonbuscar.value="";
}
document.addEventListener("DOMContentLoaded", function() {
const conteinerBtn = document.querySelector("#box-btn");
const butaoCor = document.querySelector("#bt");
const paralax = document.getElementById("paralax");
const boxImagem = document.getElementById('imagem');
const minhaImg = document.getElementById('minha-img');

const span = document.querySelectorAll('.texto span')
console.log(span)




// Funções para abrir e fechar o menu lateral

const butaoAbrir = document.getElementById('abrirMenu')
const butaoFechar = document.getElementById('fecharMenu')
const nav = document.getElementById('menu')

butaoAbrir.addEventListener('click', function() {
    nav.style.width = '200px'
    nav.style.height = '100vh'
})

nav.addEventListener('click', function() {
    nav.style.width = '0'
    nav.style.height = '0'
})
   })

   // Funções de scroll

   document.addEventListener("scroll", function() {
    const scrollLeft = document.querySelectorAll(".scroll-left");
    const scrollRight = document.querySelectorAll(".scroll-right");
    const scrollRightMenos = document.querySelectorAll(".scroll-rightM");
    const scrollOpacity = document.querySelectorAll(".scroll-opacity");
    const scrollTop = document.querySelectorAll(".scroll-top");

    scrollLeft.forEach(scrollLeft => {

        const boxPosition = scrollLeft.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (boxPosition < windowHeight) {
            scrollLeft.classList.add("scrollLeft");
        }else {
            scrollLeft.classList.remove("scrollLeft");
  }
    })

    scrollRight.forEach(scrollRight => {

        const boxPosition = scrollRight.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (boxPosition < windowHeight) {
            scrollRight.classList.add("scrollRight");
        }else {
            scrollRight.classList.remove("scrollRight");
  }
    })

    scrollRightMenos.forEach(scrollRightMenos => {

        const boxPosition = scrollRightMenos.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (boxPosition < windowHeight) {
            scrollRightMenos.classList.add("scrollRightM");
        }else {
            scrollRightMenos.classList.remove("scrollRightM");
  }
    })

    scrollOpacity.forEach(scrollOpacity => {

        const boxPosition = scrollOpacity.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (boxPosition < windowHeight) {
            scrollOpacity.style.opacity = "1"
        }else {
            scrollOpacity.style.opacity = "0"
        }
    })

    scrollTop.forEach(scrollTop => {

        const boxPosition = scrollTop.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (boxPosition < windowHeight) {
            scrollTop.classList.add("scrollTop");
        }else {
            scrollTop.classList.remove("scrollTop");
  }
    })

})
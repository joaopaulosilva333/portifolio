document.addEventListener("DOMContentLoaded", function() {
const conteinerBtn = document.querySelector("#box-btn");
const butaoCor = document.querySelector("#bt");
const paralax = document.getElementById("paralax");


    // Função para mudar a cor de fundo do body ao clicar

    butaoCor.addEventListener("click", function() {

        const styles = window.getComputedStyle(butaoCor);
        const estiloParalax = window.getComputedStyle(paralax).backgroundColor;
        const color = styles.backgroundColor;
        const nav = document.getElementById("inicio");
        

       if(color === estiloParalax){
        document.body.style.background = "rgb(211, 208, 208)";
        butaoCor.style.marginRight = "0";
        butaoCor.style.marginLeft = "20px";
        conteinerBtn.style.backgroundColor = "black";
        butaoCor.style.backgroundColor = "white";
        document.body.style.color = "#0f0f0fee";
        nav.style.backgroundColor = "#363636";
       }else {

        document.body.style.background = "#000000";
        butaoCor.style.marginRight = "20px";
        butaoCor.style.marginLeft = "0";
        conteinerBtn.style.backgroundColor = "white";
        butaoCor.style.backgroundColor = "black";
        document.body.style.color = "#ffffffc0";
        nav.style.backgroundColor = "black";
       }

    
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
            console.log("aaaaaaa")
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
const wrapper1 = document.querySelector(".wrapper:nth-of-type(1)"),
    wrapper2 = document.querySelector(".wrapper:nth-of-type(2)"),
    wrapper3 = document.querySelector(".wrapper:nth-of-type(3)"),
    wrapper4 = document.querySelector(".wrapper:nth-of-type(4)"),
    wrapper5 = document.querySelector(".wrapper:nth-of-type(5)"),
    wrapper6 = document.querySelector(".wrapper:nth-of-type(6)"),
    wrapper7 = document.querySelector(".wrapper:nth-of-type(7)"),
    wrapper8 = document.querySelector(".wrapper:nth-of-type(8)"),
    wrapper9 = document.querySelector(".wrapper:nth-of-type(9)"),
    wrapper10 = document.querySelector(".wrapper:nth-of-type(10)"),
    wrapper11 = document.querySelector(".wrapper:nth-of-type(11)"),
    wrapper12 = document.querySelector(".wrapper:nth-of-type(12)"),
    wrapper13 = document.querySelector(".wrapper:nth-of-type(13)"),
    wrapper14 = document.querySelector(".wrapper:nth-of-type(14)"),
    heading1 = document.querySelector(".first h1"),
    p1 = document.querySelector(".first p");

function fadeIn() {
    setTimeout(() => {
        wrapper1.classList.add("animated"),
        wrapper8.classList.add("animated"),
        heading1.classList.add("animated"),
        p1.classList.add("animated")
    }, 0);   
    setTimeout(() => {
        wrapper2.classList.add("animated"),
        wrapper9.classList.add("animated")
    }, 250);   
    setTimeout(() => {
        wrapper3.classList.add("animated"),
        wrapper10.classList.add("animated")
    }, 500);   
    setTimeout(() => {
        wrapper4.classList.add("animated"),
        wrapper11.classList.add("animated")
    }, 750);   
    setTimeout(() => {
        wrapper5.classList.add("animated"),
        wrapper12.classList.add("animated")
    }, 1000);   
    setTimeout(() => {
        wrapper6.classList.add("animated"),
        wrapper13.classList.add("animated")
    }, 1250);   
    setTimeout(() => {
        wrapper7.classList.add("animated"),
        wrapper14.classList.add("animated")
    }, 1500);
};
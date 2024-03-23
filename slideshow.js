const cover1 = document.querySelector(".cover:nth-of-type(1)"),
    cover2 = document.querySelector(".cover:nth-of-type(2)"),
    cover3 = document.querySelector(".cover:nth-of-type(3)"),
    character1 = document.querySelector(".cover-character:nth-last-of-type(1)"),
    character2 = document.querySelector(".cover-character:nth-last-of-type(2)"),
    character3 = document.querySelector(".cover-character:nth-last-of-type(3)"),
    character4 = document.querySelector(".cover-character:nth-last-of-type(4)"),
    character5 = document.querySelector(".cover-character:nth-last-of-type(5)"),
    character6 = document.querySelector(".cover-character:nth-last-of-type(6)"),
    character7 = document.querySelector(".cover-character:nth-last-of-type(7)"),
    character8 = document.querySelector(".cover-character:nth-last-of-type(8)");

function wave() {
    character1.classList.add("up");
    setTimeout(() => {
        character2.classList.add("up");
    }, 90);
    setTimeout(() => {
        character3.classList.add("up");
        character1.classList.remove("up");
    }, 180);
    setTimeout(() => {
        character4.classList.add("up");
        character2.classList.remove("up");
    }, 270);
    setTimeout(() => {
        character5.classList.add("up");
        character3.classList.remove("up");
    }, 360);
    setTimeout(() => {
        character6.classList.add("up");
        character4.classList.remove("up");
    }, 450);
    setTimeout(() => {
        character7.classList.add("up");
        character5.classList.remove("up");
    }, 540);
    setTimeout(() => {
        character8.classList.add("up");
        character6.classList.remove("up");
    }, 630);
    setTimeout(() => {
        character7.classList.remove("up");
    }, 720);
    setTimeout(() => {
        character8.classList.remove("up");
    }, 810);
};

function slideshow() {
    setTimeout(() => {
        cover3.classList.remove("outside");
        cover1.classList.remove("visible");
        cover1.classList.add("outside")
        cover2.classList.add("visible");
        wave();            
    }, 5000);
    setTimeout(() => {
        cover1.classList.remove("outside");
        cover2.classList.remove("visible");
        cover2.classList.add("outside");
        cover3.classList.add("visible");
        wave();
    }, 10000);
    setTimeout(() => {
        cover2.classList.remove("outside");
        cover3.classList.remove("visible");
        cover3.classList.add("outside");
        cover1.classList.add("visible");
        wave();
    }, 15000);
};

slideshow();

setInterval(() => {
    slideshow();
}, 15000);
const html = document.querySelector("html");

function preventScroll(event) {
    event.preventDefault();
    html.scrollBy({
        top: event.deltaY,
        behavior: "smooth"
    });
};

html.addEventListener("wheel", preventScroll, {passive: false});
onload = () =>{
    document.body.classList.remove("container");
};
document.addEventListener("DOMContentLoaded", () => {
    const transitionElement = document.createElement("div");
    transitionElement.style.position = "fixed";
    transitionElement.style.top = "0";
    transitionElement.style.left = "0";
    transitionElement.style.width = "100%";
    transitionElement.style.height = "100%";
    transitionElement.style.backgroundColor = "#000";
    transitionElement.style.zIndex = "1000";
    transitionElement.style.transition = "opacity 0.8s ease-in-out";
    transitionElement.style.opacity = "1";
    document.body.appendChild(transitionElement);

    setTimeout(() => {
        transitionElement.style.opacity = "0";
        transitionElement.addEventListener("transitionend", () => {
            transitionElement.remove();
        });
    }, 100);

    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetUrl = link.href;
            transitionElement.style.opacity = "1";
            transitionElement.addEventListener("transitionend", () => {
                window.location.href = targetUrl;
            });
        });
    });
});

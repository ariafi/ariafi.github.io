document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener("keydown", function(event) {
    if (
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && event.key === "I") ||
        (event.ctrlKey && event.shiftKey && event.key === "C") ||
        (event.ctrlKey && event.shiftKey && event.key === "J") ||
        (event.ctrlKey && event.key === "U")
    ) {
        event.preventDefault();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "u") {
        event.preventDefault();
    }
});

setInterval(function () {
    const before = new Date().getTime();
    debugger;
    const after = new Date().getTime();
    if (after - before > 100) {
        document.write("Developer Tools is diabled!");
        window.location.href = "about:blank";
    }
}, 1000);

document.addEventListener("dragstart", event => event.preventDefault());

function addLoadedOnScroll() {
    const elements = document.querySelectorAll("body *");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("loaded");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));
}
document.addEventListener("DOMContentLoaded", addLoadedOnScroll);
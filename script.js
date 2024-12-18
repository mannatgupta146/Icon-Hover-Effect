const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

document.addEventListener("mouseover", () => {
    cursor.style.opacity = 1;
});

document.addEventListener("mouseout", () => {
    cursor.style.opacity = 0.5;
});

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("click-me");
    const maxDist = 100;

    const moveButton = () => {
        const newX = Math.random() * (window.innerWidth - button.getBoundingClientRect().width);
        const newY = Math.random() * (window.innerHeight - button.getBoundingClientRect().height);
        button.style.left = newX + "px";
        button.style.top = newY + "px";
    };

    addEventListener("mousemove", (e) => {
        const buttonX = button.getBoundingClientRect().left + button.getBoundingClientRect().width / 2;
        const buttonY = button.getBoundingClientRect().top + button.getBoundingClientRect().height / 2;
        const distX = e.clientX - buttonX;
        const distY = e.clientY - buttonY;
        const dist = Math.sqrt(distX * distX + distY * distY);

        if (dist < maxDist) {
            moveButton();
        }
    });

    button.addEventListener("mouseover", moveButton);
});
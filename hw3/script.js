document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector(".clickbox");
    let box = document.querySelector(".box");

    let confettiImages = [
        "straw.png",
        "beach.png",
        "flower.png",
        "hands.png",
        "heart.png",
    ];

    let backgroundImages = [
        "bg1.jpg",
        "bg2.jpg",
        "bg3.jpg",
    ];

    let isDefaultBackground = true;

    button.addEventListener("click", function () {
        let buttonRect = button.getBoundingClientRect();
        let buttonCenterX = buttonRect.left + buttonRect.width / 2;
        let buttonCenterY = buttonRect.top + buttonRect.height / 2;

        for (let i = 0; i < 15; i++) {
            let confetti = document.createElement("img");
            confetti.src = confettiImages[Math.floor(Math.random() * confettiImages.length)];
            confetti.classList.add("confetti");

            confetti.style.left = `${buttonCenterX}px`;
            confetti.style.top = `${buttonCenterY}px`;

            let angle = Math.random() * 360;
            let distance = Math.random() * 300 + 100;
            let x = Math.cos(angle) * distance;
            let y = Math.sin(angle) * distance;

            confetti.style.setProperty("--x", `${x}px`);
            confetti.style.setProperty("--y", `${y}px`);

            document.body.appendChild(confetti);


            setTimeout(() => confetti.remove(), 1500);
        }


        if (isDefaultBackground) {
            let randomBg = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
            document.body.style.backgroundImage = `url(${randomBg})`;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            isDefaultBackground = false;
        } else {
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundColor = "#f0f0f0";
            isDefaultBackground = true;
        }

        if (button.style.backgroundColor === "lightsteelblue") {
            button.style.backgroundColor = "yellow";
            button.style.margin = "30px";
        } else {
            button.style.backgroundColor = "lightsteelblue";
            button.style.margin = "100px";
        }
    });
});

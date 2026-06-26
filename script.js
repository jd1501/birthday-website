const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";

    } else {

        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";

    }

});

// Envelope
const envelope = document.getElementById("envelope");
const letter = document.getElementById("fullLetter");

if (envelope) {
    envelope.onclick = () => {
        const flap = document.querySelector(".flap");
        const seal = document.querySelector(".seal");

        flap.style.transform = "rotateX(180deg)";
        seal.style.opacity = "0";

        setTimeout(() => {
            envelope.style.display = "none";
            letter.style.display = "block";

            setTimeout(() => {
                letter.style.opacity = "1";
            }, 100);

        }, 900);
    };
}

// Final Section Animation

const secret = document.getElementById("secretMessage");
const finalSection = document.getElementById("finalSection");

let alreadyPlayed = false;

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting && !alreadyPlayed) {

            alreadyPlayed = true;

            secret.classList.add("show");

            // Restart music automatically (optional)
            music.currentTime = 0;
            music.play();

            // Hearts + Flowers
            for (let i = 0; i < 120; i++) {

                const item = document.createElement("div");

                item.innerHTML = Math.random() > 0.5 ? "❤️" : "🌸";

                item.style.position = "fixed";
                item.style.left = Math.random() * 100 + "vw";
                item.style.top = "-20px";
                item.style.fontSize = (20 + Math.random() * 20) + "px";
                item.style.pointerEvents = "none";
                item.style.transition = "5s linear";
                item.style.zIndex = "9999";

                document.body.appendChild(item);

                setTimeout(() => {
                    item.style.top = "110vh";
                }, 50);

                setTimeout(() => {
                    item.remove();
                }, 5200);

            }

        }

    });

}, {
    threshold: 0.5
});

observer.observe(finalSection);
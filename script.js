const envelope = document.getElementById("envelope");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;


// =========================
// OPEN LETTER
// =========================

envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");

    // browser biasanya tidak mengizinkan
    // autoplay sebelum user melakukan interaksi.
    // Jadi musik dimulai saat surat diklik.

    if (!musicPlaying) {

        music.play()
            .then(() => {

                musicPlaying = true;

                musicBtn.classList.add("playing");

                musicBtn.innerHTML = "♫";

            })
            .catch(error => {

                console.log(
                    "Music autoplay blocked:",
                    error
                );

            });

    }

});


// =========================
// MUSIC BUTTON
// =========================

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicPlaying = true;

        musicBtn.classList.add("playing");

    } else {

        music.pause();

        musicPlaying = false;

        musicBtn.classList.remove("playing");

    }

});


// =========================
// SCROLL REVEAL
// =========================

const revealElements =
    document.querySelectorAll(
        ".message-card, .polaroid, .wish, .section-heading"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});
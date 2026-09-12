/* =========================================
   OUR LITTLE STORY
   FINAL JAVASCRIPT
========================================= */


/* PASSWORD */

const PASSWORD = "Nadiya123";


const passwordScreen =
    document.getElementById("passwordScreen");

const passwordInput =
    document.getElementById("passwordInput");

const loginButton =
    document.getElementById("loginButton");

const passwordError =
    document.getElementById("passwordError");

const website =
    document.getElementById("website");


function unlock() {

    passwordScreen.classList.add("hide");

    website.classList.add("show");

    sessionStorage.setItem(
        "storyUnlocked",
        "true"
    );

    createBurst(
        window.innerWidth / 2,
        window.innerHeight / 2
    );

    showToast(
        "Welcome ✨"
    );

}


function checkPassword() {

    const value =
        passwordInput.value.trim();

    if (value === PASSWORD) {

        passwordError.textContent = "";

        unlock();

    } else {

        passwordError.textContent =
            "Wrong password. Try again 😅";

        passwordInput.classList.remove(
            "shake"
        );

        void passwordInput.offsetWidth;

        passwordInput.classList.add(
            "shake"
        );

    }

}


loginButton.addEventListener(
    "click",
    checkPassword
);


passwordInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {
            checkPassword();
        }

    }
);


/* SHOW PASSWORD */

document
    .getElementById("showPassword")
    .addEventListener(
        "click",
        () => {

            const hidden =
                passwordInput.type ===
                "password";

            passwordInput.type =
                hidden
                    ? "text"
                    : "password";

            document.getElementById(
                "showPassword"
            ).textContent =
                hidden
                    ? "🙈"
                    : "👁";

        }
    );


/* CHECK SAVED LOGIN */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                document
                    .getElementById("loader")
                    .classList.add("hide");

                if (
                    sessionStorage.getItem(
                        "storyUnlocked"
                    ) === "true"
                ) {

                    passwordScreen.classList.add(
                        "hide"
                    );

                    website.classList.add(
                        "show"
                    );

                }

            },
            900
        );

    }
);


/* =========================================
   THEME
========================================= */

const themeButton =
    document.getElementById(
        "themeButton"
    );

const savedTheme =
    localStorage.getItem(
        "storyTheme"
    );


if (savedTheme === "light") {

    document.body.classList.add(
        "light"
    );

    themeButton.textContent =
        "🌙";

}


themeButton.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );

        const light =
            document.body.classList.contains(
                "light"
            );

        localStorage.setItem(
            "storyTheme",
            light
                ? "light"
                : "dark"
        );

        themeButton.textContent =
            light
                ? "🌙"
                : "☀️";

    }
);


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById(
        "menuButton"
    );

const navMenu =
    document.getElementById(
        "navMenu"
    );


menuButton.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle(
            "show"
        );

        menuButton.textContent =
            navMenu.classList.contains(
                "show"
            )
                ? "×"
                : "☰";

    }
);


document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "show"
                );

                menuButton.textContent =
                    "☰";

            }
        );

    });


/* =========================================
   TOAST
========================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );

    clearTimeout(toastTimer);

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2800
        );

}


/* =========================================
   MODAL
========================================= */

const modal =
    document.getElementById(
        "modal"
    );

const modalEmoji =
    document.getElementById(
        "modalEmoji"
    );

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalMessage =
    document.getElementById(
        "modalMessage"
    );


const surprises = [

    {
        emoji: "✨",
        title: "Tiny Reminder",
        message:
            "Don't forget to enjoy the small moments. They often become the best memories."
    },

    {
        emoji: "🌙",
        title: "Random Thought",
        message:
            "Some moments become special simply because they happened at the right time."
    },

    {
        emoji: "😌",
        title: "Okay...",
        message:
            "You clicked the surprise button. So here's a random little smile for you."
    },

    {
        emoji: "🎈",
        title: "You Found It!",
        message:
            "There was absolutely no reason to click that button... but here we are 😂"
    },

    {
        emoji: "💫",
        title: "One More Thing",
        message:
            "Not everything needs a complicated explanation. Some things are simply nice."
    }

];


function openModal() {

    const random =
        surprises[
            Math.floor(
                Math.random()
                * surprises.length
            )
        ];

    modalEmoji.textContent =
        random.emoji;

    modalTitle.textContent =
        random.title;

    modalMessage.textContent =
        random.message;

    modal.classList.add(
        "show"
    );

}


function closeModal() {

    modal.classList.remove(
        "show"
    );

}


document
    .getElementById("surpriseButton")
    .addEventListener(
        "click",
        openModal
    );


document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        closeModal
    );


document
    .getElementById("modalOkay")
    .addEventListener(
        "click",
        closeModal
    );


modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            closeModal();

        }

    }
);


/* =========================================
   RANDOM BUTTON
========================================= */

const randomMessages = [

    "Okay... that was a pretty good click 😌",

    "You just unlocked absolutely nothing 😂",

    "Maybe this website likes you.",

    "Interesting choice of button.",

    "Congratulations. You clicked a button.",

    "That was unnecessary... but fun.",

    "A tiny moment of happiness unlocked ✨"

];


document
    .getElementById("randomButton")
    .addEventListener(
        "click",
        () => {

            const message =
                randomMessages[
                    Math.floor(
                        Math.random()
                        * randomMessages.length
                    )
                ];

            document.getElementById(
                "randomText"
            ).textContent =
                message;

            createBurst(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

        }
    );


/* =========================================
   THOUGHT BUTTON
========================================= */

const thoughts = [

    "Today deserves at least one good memory.",

    "Sometimes a simple smile can change the whole mood.",

    "The little things are usually the things we remember.",

    "You made it this far. Respect 😌",

    "Maybe this is your sign to enjoy today.",

    "Some days are better when you don't overthink them.",

    "Another random thought successfully delivered ✨"

];


document
    .getElementById("thoughtButton")
    .addEventListener(
        "click",
        () => {

            const thought =
                thoughts[
                    Math.floor(
                        Math.random()
                        * thoughts.length
                    )
                ];

            document.getElementById(
                "thoughtText"
            ).textContent =
                thought;

        }
    );


/* =========================================
   RUNAWAY BUTTON
========================================= */

const runaway =
    document.getElementById(
        "runawayButton"
    );

let runawayCount = 0;


function escapeButton() {

    runawayCount++;

    const card =
        runaway.closest(
            ".runaway-card"
        );

    const maxX =
        Math.max(
            20,
            card.clientWidth
            - runaway.offsetWidth
            - 30
        );

    const x =
        Math.random()
        * maxX
        - maxX / 2;

    const y =
        Math.random()
        * 80
        - 40;

    runaway.style.transform =
        `translate(${x}px,${y}px)`;


    if (runawayCount === 3) {

        showToast(
            "Why are you chasing it? 😂"
        );

    }

    if (runawayCount === 6) {

        showToast(
            "Okay! You REALLY want to click it 😭"
        );

    }

}


runaway.addEventListener(
    "mouseenter",
    escapeButton
);


runaway.addEventListener(
    "touchstart",
    event => {

        event.preventDefault();

        escapeButton();

    }
);


runaway.addEventListener(
    "click",
    () => {

        runaway.style.transform =
            "translate(0,0)";

        runawayCount = 0;

        showToast(
            "You finally caught me! 😂"
        );

        createBurst(
            window.innerWidth / 2,
            window.innerHeight / 2
        );

    }
);


/* =========================================
   MAGIC BUTTON
========================================= */

const magicMessages = [

    "Something unexpected might happen.",

    "Okay... something changed.",

    "The magic button approves your decision.",

    "You just activated the tiny magic machine.",

    "Nothing happened... probably 👀",

    "The page feels slightly happier now.",

    "✨ Magic successfully completed."

];


let magicIndex = 0;


document
    .getElementById("magicButton")
    .addEventListener(
        "click",
        () => {

            magicIndex++;

            if (
                magicIndex >=
                magicMessages.length
            ) {
                magicIndex = 0;
            }

            document.getElementById(
                "magicText"
            ).textContent =
                magicMessages[
                    magicIndex
                ];

            createBurst(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

        }
    );


/* =========================================
   PARTICLES
========================================= */

function createParticle() {

    const particle =
        document.createElement(
            "span"
        );

    particle.className =
        "particle";

    particle.style.left =
        Math.random()
        * window.innerWidth
        + "px";

    particle.style.top =
        window.innerHeight
        + "px";

    particle.style.opacity =
        .3 +
        Math.random() * .6;

    particle.style.transform =
        `scale(${.5 + Math.random()})`;

    document
        .getElementById("particles")
        .appendChild(
            particle
        );

    setTimeout(
        () => particle.remove(),
        6000
    );

}


setInterval(
    createParticle,
    700
);


/* =========================================
   BURST
========================================= */

function createBurst(x,y) {

    const symbols = [
        "✦",
        "✧",
        "♡",
        "✨",
        "•"
    ];

    for (
        let i = 0;
        i < 18;
        i++
    ) {

        const item =
            document.createElement(
                "span"
            );

        item.textContent =
            symbols[
                Math.floor(
                    Math.random()
                    * symbols.length
                )
            ];

        item.style.position =
            "fixed";

        item.style.left =
            x + "px";

        item.style.top =
            y + "px";

        item.style.zIndex =
            "50000";

        item.style.pointerEvents =
            "none";

        item.style.color =
            i % 2 === 0
                ? "#ff5b9a"
                : "#9d6cff";

        item.style.fontSize =
            12 +
            Math.random() * 17
            + "px";

        document.body.appendChild(
            item
        );

        const angle =
            Math.random()
            * Math.PI
            * 2;

        const distance =
            70 +
            Math.random()
            * 150;

        const endX =
            Math.cos(angle)
            * distance;

        const endY =
            Math.sin(angle)
            * distance;

        item.animate(
            [
                {
                    transform:
                        "translate(-50%,-50%) scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${endX}px),
                            calc(-50% + ${endY}px)
                        )
                        scale(0)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    700 +
                    Math.random() * 500,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"
            }
        ).onfinish =
            () => item.remove();

    }

}


/* =========================================
   CLICK SPARKLE
========================================= */

document.addEventListener(
    "click",
    event => {

        if (
            event.target.closest(
                "button,input,a"
            )
        ) {
            return;
        }

        createBurst(
            event.clientX,
            event.clientY
        );

    }
);


/* =========================================
   SCROLL REVEAL
========================================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: .12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(
        element =>
            observer.observe(
                element
            )
    );


/* =========================================
   FINAL SURPRISE
========================================= */

document
    .getElementById("finalButton")
    .addEventListener(
        "click",
        () => {

            modalEmoji.textContent =
                "✨";

            modalTitle.textContent =
                "You made it!";

            modalMessage.textContent =
                "The page ends here... but the story doesn't have to.";

            modal.classList.add(
                "show"
            );


            for (
                let i = 0;
                i < 7;
                i++
            ) {

                setTimeout(
                    () => {

                        createBurst(
                            Math.random()
                            * window.innerWidth,

                            Math.random()
                            * window.innerHeight
                        );

                    },

                    i * 180
                );

            }

        }
    );


/* =========================================
   TOP BUTTON
========================================= */

document
    .getElementById("topButton")
    .addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


/* =========================================
   SECRET CLICK
========================================= */

let clicks = 0;


document.addEventListener(
    "click",
    event => {

        if (
            event.target.closest(
                "button,a"
            )
        ) {

            clicks++;

            if (clicks === 10) {

                showToast(
                    "Whoa! You found the secret 😳✨"
                );

                createBurst(
                    window.innerWidth / 2,
                    window.innerHeight / 2
                );

            }

            if (clicks > 10) {
                clicks = 0;
            }

        }

    }
);


/* =========================================
   ESC KEY
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);

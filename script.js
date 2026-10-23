// 1. DYNAMIC MOUSE LIGHTING SPOTLIGHT EFFECT
document.querySelectorAll("section").forEach((sec) => {
    sec.addEventListener("pointermove", (e) => {
        const bounds = sec.getBoundingClientRect();
        const x = ((e.clientX - bounds.left) / bounds.width) * 100;
        const y = ((e.clientY - bounds.top) / bounds.height) * 100;

        sec.style.setProperty("--mouse-x", `${x}%`);
        sec.style.setProperty("--mouse-y", `${y}%`);
    });
});

// 2. INTERACTIVE ABOUT TABS
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        tabContents.forEach((c) => c.classList.remove("active"));

        btn.classList.add("active");
        const selectedTab = document.getElementById(btn.dataset.tab);
        if (selectedTab) selectedTab.classList.add("active");
    });
});

// 3. EXPANDABLE HOBBY CARDS INTERACTION
document.querySelectorAll(".hobby-item").forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

// 4. PORTFOLIO FILTERING SYSTEM
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;
        projectCards.forEach((card) => {
            if (filter === "all" || card.dataset.category === filter) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    });
});

// 5. PORTFOLIO MODAL CONTROLS
const projectData = {
    "1": {
        title: "Personal Website",
        img: "image.png",
        desc: "A personalized responsive web portfolio designed with glowing blue dreamscape aesthetics, custom CSS keyframe animations, interactive navigation, and responsive typography.",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive"]
    },
    "2": {
        title: "OneTask Management Platform",
        img: "Workflow-Management.webp",
        desc: "A productivity web tool that simplifies task tracking, daily priorities, and progress scheduling with clean visual indicators.",
        tags: ["JavaScript", "UI/UX", "LocalStorage", "CSS Grid"]
    },
    "3": {
        title: "Interactive Web Design Concept",
        img: "download.jpg",
        desc: "A prototype focusing on interface usability, modern dark theme accents, micro-interactions, and accessibility.",
        tags: ["UI/UX Design", "Figma Design", "Prototyping"]
    }
};

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalImg = document.getElementById("modalImg");
const modalDesc = document.getElementById("modalDescription");
const modalTags = document.getElementById("modalTags");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".modal-trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
        const id = btn.dataset.project;
        const data = projectData[id];

        if (data) {
            modalTitle.textContent = data.title;
            modalImg.src = data.img;
            modalDesc.textContent = data.desc;
            modalTags.innerHTML = "";
            data.tags.forEach((tag) => {
                const tagSpan = document.createElement("span");
                tagSpan.textContent = tag;
                modalTags.appendChild(tagSpan);
            });
            modal.classList.add("active");
        }
    });
});

if (closeModal) closeModal.addEventListener("click", () => modal.classList.remove("active"));
window.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("active"); });

// // 6. MINI GAME: CYBER CATCH
// const gameBoard = document.getElementById("game-board");
// const startBtn = document.getElementById("start-game-btn");
// const startScreen = document.getElementById("game-start-screen");
// const scoreDisplay = document.getElementById("game-score");
// const timerDisplay = document.getElementById("game-timer");
// const highscoreDisplay = document.getElementById("game-highscore");

// let score = 0, timeLeft = 20, gameInterval = null, targetTimeout = null, highScore = 0;

// function spawnTarget() {
//     if (!gameBoard) return;
//     const existingTarget = gameBoard.querySelector(".game-target");
//     if (existingTarget) existingTarget.remove();

//     const target = document.createElement("div");
//     target.classList.add("game-target");
//     const isGlitch = Math.random() < 0.2;
//     if (isGlitch) target.classList.add("glitch");

//     const boardWidth = gameBoard.clientWidth - 50;
//     const boardHeight = gameBoard.clientHeight - 50;
//     target.style.left = `${Math.floor(Math.random() * boardWidth)}px`;
//     target.style.top = `${Math.floor(Math.random() * boardHeight)}px`;

//     target.addEventListener("click", () => {
//         score = isGlitch ? Math.max(0, score - 2) : score + 1;
//         scoreDisplay.textContent = score;
//         target.remove();
//         clearTimeout(targetTimeout);
//         spawnTarget();
//     });

//     gameBoard.appendChild(target);
//     targetTimeout = setTimeout(() => {
//         if (target.parentNode) {
//             target.remove();
//             spawnTarget();
//         }
//     }, 1200);
// }

// function startGame() {
//     score = 0; timeLeft = 20;
//     scoreDisplay.textContent = score;
//     timerDisplay.textContent = timeLeft;
//     startScreen.style.display = "none";
//     spawnTarget();

//     gameInterval = setInterval(() => {
//         timeLeft--;
//         timerDisplay.textContent = timeLeft;
//         if (timeLeft <= 0) endGame();
//     }, 1000);
// }

// function endGame() {
//     clearInterval(gameInterval);
//     clearTimeout(targetTimeout);
//     const existingTarget = gameBoard.querySelector(".game-target");
//     if (existingTarget) existingTarget.remove();

//     if (score > highScore) {
//         highScore = score;
//         highscoreDisplay.textContent = highScore;
//     }

//     startScreen.querySelector("h2").textContent = "Game Over!";
//     startScreen.querySelector("p").textContent = `You scored ${score} points! Play again?`;
//     startBtn.textContent = "Restart Game";
//     startScreen.style.display = "flex";
// }

// if (startBtn) startBtn.addEventListener("click", startGame);

// 7. CONTACT FORM SUBMISSION
// const contactForm = document.getElementById("contactForm");
// const formStatus = document.getElementById("formStatus");

// if (contactForm) {
//     contactForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//         formStatus.textContent = "Thank you! Your message has been sent successfully.";
//         formStatus.className = "form-status success";
//         contactForm.reset();
//         setTimeout(() => { formStatus.textContent = ""; }, 4000);
//     });
// }
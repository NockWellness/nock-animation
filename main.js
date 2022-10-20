import './style.css'

const animationTarget = document.getElementById("animation-target");

const listOfWords = ["detox", "vegan", "low fat"];

let currentIndex = 0;

(async function () {
    for (let i = 0; i <= listOfWords.length; i++) {
        await tick();
        currentIndex = (currentIndex + 1) % listOfWords.length;
    }
    animationTarget.classList.remove("animated");
    animationTarget.innerText = "NOCK";
})();

async function tick() {
    animationTarget.classList.add("animated");
    await awaitableSleep(2800);
    animationTarget.classList.add("hidden");
    animationTarget.innerText = listOfWords[currentIndex];
    await awaitableSleep(300);
    animationTarget.classList.remove("animated");
    animationTarget.classList.remove("hidden");
    void animationTarget.offsetWidth;
}

function awaitableSleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

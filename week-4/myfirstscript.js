const staticDiglett = document.querySelector(".diglett-full");

staticDiglett.addEventListener("mouseenter", divDown);
staticDiglett.addEventListener("mouseleave", divUp);

function divDown() {
    staticDiglett.classList.add("dig");
}

function divUp() {
    staticDiglett.classList.remove("dig");
}

staticDiglett.addEventListener("click", function () {

    const digBuffer = 200;

    let randomX = rng(digBuffer, window.innerWidth - digBuffer);
    let randomY = rng(digBuffer, window.innerHeight - digBuffer);
    // console.log(randomX);
    staticDiglett.style.top = `${randomY}px`;
    this.style.left = `${randomX}px`;
    staticDiglett.classList.add("dig");
});



//Helper Functions
function rng(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
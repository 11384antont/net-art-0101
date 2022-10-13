const socket = io();
const randomID = ("a" + Math.random()).replace(".", "");

const partyZone = document.querySelector("#cursor-zone");

//cursor tracking line
// const cursorRect = document.createElement("div");
// cursorRect.classList.add("cursor-rect");
// partyZone.appendChild(cursorRect);
//follow cursor

window.addEventListener("mousemove", function (event) {
    //event -> represent the event happening
    // console.log(event.clientX, event.clientY);
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // const cursorRect = `<div class="cursor-rect" style="top: ${mouseX}px; left: ${mouseY}px"></div>`;

    // cursorRect.style.top = `${mouseY}px`;
    // cursorRect.style.left = `${mouseX}px`;

    const mouseData = {
        mouseX: mouseX,
        mouseY: mouseY,
        id: randomID
    };

    socket.emit("move-mouse", mouseData);
});

socket.on("update-mouse-pos-for-everyone", function (mouseData) {
    const mouseElement = document.getElementById(mouseData.id);

    if (!mouseElement) {
        const newMouseElement = document.createElement("div");
        newMouseElement.id = mouseData.id;
        newMouseElement.classList.add("cursor-rect");
        partyZone.appendChild(cursorRect);
        // newMouseElement.style.top = `${mouseData.mouseY}px`;
        // newMouseElement.style.left = `${mouseData.mouseX}px`;
    } else {
        mouseElement.style.top = `${mouseData.mouseY}px`;
        mouseElement.style.left = `${mouseData.mouseX}px`;
    }
});
let popupWindow;
let interval;
function openPopupWindow() {
    popupWindow = window.open("", "FloatingPopupWindow", "width=300,height=200,left=100,top=100");
    interval = setInterval(movePopupCircular, 50); // Adjust interval time (milliseconds)
}


function movePopupCircular() {
    if (!popupWindow || popupWindow.closed) {
        clearInterval(interval);
        return;
    }

    const centerX = popupWindow.screenX + popupWindow.outerWidth / 2;
    const centerY = popupWindow.screenY + popupWindow.outerHeight / 2;
    const radius = 50;
    const angle = (Date.now() / 1000) % (2 * Math.PI);

    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    popupWindow.moveTo(x - popupWindow.outerWidth / 2, y - popupWindow.outerHeight / 2);
}
function stopMoving() {
    clearInterval(interval);
}

document.getElementById("stopButton").addEventListener("click", stopMoving);
openPopupWindow();
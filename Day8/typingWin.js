let popupWindow;
let message = "Hello, this is a typing popup!, it will close after typing in 2 seconds";
let currentIndex = 0;

function openPopupWindow() {
    popupWindow = window.open("", "TypingPopupWindow", "width=300,height=200,left=100,top=100");
    typeMessage();
}

function typeMessage() {
    if (!popupWindow || popupWindow.closed) {
        return;
    }

    if (currentIndex < message.length) {
        popupWindow.document.body.innerHTML += message[currentIndex];
        currentIndex++;
        setTimeout(typeMessage, 100);
    } else {
        setTimeout(() => {
            popupWindow.close();
        }, 1000);
    }
}

document.getElementById("openButton").addEventListener("click", openPopupWindow);

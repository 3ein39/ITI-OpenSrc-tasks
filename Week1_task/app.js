// change the blur of the 4 buttons on click
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button);
        button.classList.toggle("clicked");
        // remove the clicked class after half a second
        setTimeout(() => {
            button.classList.toggle("clicked");
        }, 250);
    });
})


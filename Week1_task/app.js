// change the blur of the 4 buttons on click
let buttons = document.querySelectorAll("button");
let cards = document.querySelectorAll(".card");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button);
        button.classList.toggle("clicked");
        // remove the clicked class after half a second
        setTimeout(() => {
            button.classList.toggle("clicked");
        }, 250);

        // hide all the cards
        cards.forEach((card) => {
            card.style.display = "none";
        })

        // display the card with the clicked button
        cards.forEach((card) => {
            if (card.id === button.value) {
                card.style.display = "block";
            }
        })

    });


})




// change the blur of the 4 buttons on click
let buttons = document.querySelectorAll("button");
let cards = document.querySelectorAll("[value='card']");
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
                card.style.display = "flex";
            }
        })

    });
})

let left = document.querySelector(".arrow-left");
let right = document.querySelector(".arrow-right");
let mainImage = document.querySelector(".main-image");
left.addEventListener("click", () => {
   // change them main image src
    let index = mainImage.src[mainImage.src.length- 5];
    let nextIndex = ((Number(index) - 1) % 8);
    if (nextIndex === 0) {
        nextIndex = 8;
    }
    mainImage.src = `./images/${nextIndex}.jpg`;
})

right.addEventListener("click", () => {
    // change them main image src
    let index = mainImage.src[mainImage.src.length- 5];
    let nextIndex = ((Number(index) + 1) % 8) + 1;
    mainImage.src = `./images/${nextIndex}.jpg`;
})



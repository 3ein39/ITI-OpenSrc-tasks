// change the blur of the 4 buttons on click
let buttons = document.querySelectorAll("button");
let cards = document.querySelectorAll("[value='card']");
buttons.forEach((button) => {
    button.addEventListener("click", () => {

        if (button.id === "form-button") {
            // complainSubmit(button);
            return;
        }

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

function complainSubmit(e) {
    let form = e.target;
    let name = e.target[0].value;
    let email = e.target[1].value;
    let phone = e.target[2].value;
    let message = e.target[3].value;
    let button = e.target[4];
    button.classList.toggle("clicked");
    // remove the clicked class after half a second
    setTimeout(() => {
        button.classList.toggle("clicked");
    }, 250);
    // get the card with the clicked button
    let card = document.getElementById('complain')
    // display the info in ths card in new paragraphs
    let nameP = document.createElement("p");
    nameP.textContent = `Name: ${name}`;

    let phoneP = document.createElement("p");
    phoneP.textContent = `Phone: ${phone}`;

    let emailP = document.createElement("p");
    emailP.textContent = `Email: ${email}`;
    let messageP = document.createElement("p");
    messageP.textContent = `Message: ${message}`;
    card.appendChild(nameP);
    card.appendChild(emailP);
    card.appendChild(phoneP);
    card.appendChild(messageP);
    // hide the form
    form.style.display = "none";
    // display the card
    card.style.display = "flex";
    // let the 3 paragraphs each in separate line
    card.style.flexDirection = "column";

}

// disable the default form submit
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    complainSubmit(e);
})



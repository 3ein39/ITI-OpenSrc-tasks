let imgPath = prompt("Enter the path to an image", "images/placeholder.png");
let fontColor = prompt("Enter a font color", "green");


document.write(`<h1 style="color: ${fontColor}">This is ur image:</h1>`);
document.write(`<img src="${imgPath}" style="border: 8px solid ${fontColor}">`);

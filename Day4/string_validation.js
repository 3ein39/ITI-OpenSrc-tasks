let name = "1";

while(!isValidName(name)){
    name = prompt("Enter your name: ");
}

function isValidName(str){
    for (let i = 0; i <str.length; i++) {
        if (isNaN(str[i]))
            return true;
    }
    return false;
}

document.write("Hello " + name);
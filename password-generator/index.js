// Character sets
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
    ",","|",":",";","<",">",".","?","/"];

let num = 15;

function updateLength(value) {
    num = parseInt(value);
    document.getElementById("length-value").textContent = value;
}

// Returns array of characters based on selected options
function getCharacterSet() {
    let chars = [...letters];  // Always include letters

    const includeSymbols = document.getElementById("include-symbols").checked;
    const includeNumbers = document.getElementById("include-numbers").checked;

    if (includeNumbers) {
        chars = chars.concat(numbers);
    }

    if (includeSymbols) {
        chars = chars.concat(symbols);
    }

    return chars;
}

function getRandomCharacter() {
    const characters = getCharacterSet();
    let index = Math.floor( Math.random() * characters.length );
    return characters[index];
}

function generatePassword() {
    let password = "";

    for (let i = 0; i < num; i++) {
        password += getRandomCharacter();
    }

    return password;
}

// Async function: navigator.clipboard.writeText() returns a Promise
function copyToClipboard(element) {
    const text = element.textContent;
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {   // success
        const originalText = element.textContent;
        element.textContent = "Copied!";
        setTimeout(() => {
            element.textContent = originalText;
        }, 1000);
    }).catch(err => {                                  // failure
        console.error("Failed to copy: ", err);
    });
}

function generate() {
    document.getElementById("password1").textContent = generatePassword();
    document.getElementById("password2").textContent = generatePassword();
}

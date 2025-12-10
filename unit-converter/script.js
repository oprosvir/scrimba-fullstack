// Conversion ratios stored as object (key-value pairs)
const CONVERSIONS = {
    meters: 3.28084,
    liters: 0.264172,
    kilos: 2.20462
};

// const because we don't reassign these variables to different elements,
// but we can still modify their properties (like .value or .innerHTML)
const form = document.getElementById("converter-form");
const inputEl = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

// returns an object with converted values
function convert(val, metricUnit) {
    const ratio = CONVERSIONS[metricUnit]; // get the conversion ratio from the object
    return {
        toImperial: (val * ratio).toFixed(3),
        toMetric: (val / ratio).toFixed(3)
    };
}

function render(val, metricUnit, imperialUnit) {
    const result = convert(val, metricUnit);

    return `
        ${val} ${metricUnit} = ${result.toImperial} ${imperialUnit} | 
        ${val} ${imperialUnit} = ${result.toMetric} ${metricUnit}
    `;
}

function validateInput(val) {
    return val > 0 && val < 1000;
}

// Handle form submission
// Triggered when user clicks Convert button or presses Enter in input field
// event is an object with data about the submit event (needed for preventDefault)
form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page reload on form submission

    const input = Number(inputEl.value); // .value returns a string

    if (validateInput(input)) {
        lengthEl.innerHTML= render(input, "meters", "feet");
        volumeEl.innerHTML= render(input, "liters", "gallons");
        massEl.innerHTML= render(input, "kilos", "pounds");
    } else {
        alert("Please enter a number between 1 and 999"); // notification in browser
        inputEl.value = ""
    }
})
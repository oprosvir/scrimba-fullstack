const METER_TO_FEET = 3.28084;
const LITER_TO_GALLON = 0.264172;
const KILO_TO_POUND = 2.20462;

const convertBtn = document.getElementById("convert-btn");

let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

function convert(val, system) {
    if (system === "meters") return val * METER_TO_FEET;
    if (system === "feet") return val / METER_TO_FEET;
    if (system === "liters") return val * LITER_TO_GALLON;
    if (system === "gallons") return val / LITER_TO_GALLON;
    if (system === "kilos") return val * KILO_TO_POUND;
    if (system === "pounds") return val / KILO_TO_POUND;
}

// format: 0 meters = 0 feet | 0 feet = 0 meters
// determine WHAT to convert
// calculation, number of decimal places
// create string
function render(val, metric, imperial) {
    let valToImperial = convert(val, metric).toFixed(3);
    let valToMetric = convert(val, imperial).toFixed(3);

    let convertStr = `
        ${val} ${metric} = ${valToImperial} ${imperial} | 
        ${val} ${imperial} = ${valToMetric} ${metric}
    `;
    return convertStr;

}

// get value from input, convert to number
// check value > 0 < 1000
// convert
// print output
convertBtn.addEventListener('click', function () {
    let inputEl = document.getElementById("input-el");
    let input = Number(inputEl.value); // .value returns a string 

    if (input > 0 && input < 1000) {
        lengthEl.innerHTML= render(input, "meters", "feet");
        volumeEl.innerHTML= render(input, "liters", "gallons");
        massEl.innerHTML= render(input, "kilos", "pounds");
    } else {
        alert("Please enter a number between 1 and 999");
        inputEl.value = ""
    }
})
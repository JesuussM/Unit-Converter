/*
 * This file contains the JavaScript code for a unit converter web application.
 * It defines a function called calculate() that converts a number from one unit to another.
 */

/*
 * The calculate function retrieves the number and units from the HTML form,
 * performs the appropriate conversion based on the units selected, and
 * updates the HTML with the conversion result.
*/

const units = {
    "mph": {
        name: "Mile per Hour",
        abbreviation: "Mph",
        conversionNumber: 1,
        toMph: (number) => number * units.mph.conversionNumber,
        fromMph: (number) => number * units.mph.conversionNumber
    },
    "kph": {
        name: "Kilometer per Hour",
        abbreviation: "Kph",
        conversionNumber: 1.60934,
        toMph: (number) => number * (1 / units.kph.conversionNumber),
        fromMph: (number) => number * units.kph.conversionNumber
    },
    "fps": {
        name: "Foot per Second",
        abbreviation: "Fps",
        conversionNumber: 1.46667,
        toMph: (number) => number * (1 / units.fps.conversionNumber),
        fromMph: (number) => number * units.fps.conversionNumber
    },
    "mps": {
        name: "Meter per Second",
        abbreviation: "Mps",
        conversionNumber: 0.44704,
        toMph: (number) => number * (1 / units.mps.conversionNumber),
        fromMph: (number) => number * units.mps.conversionNumber
    },
    "knot": {
        name: "Knot",
        abbreviation: "Knot",
        conversionNumber: 0.868976,
        toMph: (number) => number * (1 / units.knot.conversionNumbe),
        fromMph: (number) => number * units.knot.conversionNumber
    }
}

for (let unit in units) {
    let option1 = document.createElement("option");
    option1.value = unit;
    option1.text = units[unit].name;
    document.getElementById("fromValue").appendChild(option1);

    let option2 = document.createElement("option");
    option2.value = unit;
    option2.text = units[unit].name;
    document.getElementById("toValue").appendChild(option2);
}

function updateUnit() {
    // Retrieve the number and units from the HTML form
    let number = Number(document.getElementById("input").value);
    let unit1 = document.getElementById("fromValue").value;
    let unit2 = document.getElementById("toValue").value;

    
    number = Math.round(calculate(number, unit1, unit2) * 100) / 100;
    // Display the result and unit
    document.getElementById("output").innerHTML = number;
    document.getElementById("result").innerHTML = units[unit2].abbreviation;
}

function calculate(number, unit1, unit2) {   
    // converts to mph
    number = units[unit1].toMph(number);
    
    // converts to unit2
    number = units[unit2].fromMph(number);
    return number;
}


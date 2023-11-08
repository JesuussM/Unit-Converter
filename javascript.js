/*
 * This file contains the JavaScript code for a unit converter web application.
 * It defines a function called calculate() that converts a number from one unit to another.
 */

/*
 * The calculate function retrieves the number and units from the HTML form,
 * performs the appropriate conversion based on the units selected, and
 * updates the HTML with the conversion result.
 */
function calculate() {
    // Retrieve the number and units from the HTML form
    let number = Number(document.getElementById("input").value);
    let unit1 = document.getElementById("fromValue").value;
    let unit2 = document.getElementById("toValue").value;

    // Perform the conversion if the first unit is mph
    if (unit1 == "mph") {
        // Convert from mph to various units
         if (unit2 == "kph") {
            number *= 1.60934;
        } else if (unit2 == "fps") {
            number *= 1.46667;
        } else if (unit2 == "mps") {
            number *= 0.44704;
        } else if (unit2 == "knot") {
            number *= 0.868976;
        }
    }
    
    // Perform the conversion if the first unit is kph
    if (unit1 == "kph") {
        // Convert from kph to various units
        if (unit2 == "mph") {
            number *= 0.621371;
        } else if (unit2 == "fps") {
            number *= 0.911344;
        } else if (unit2 == "mps") {
            number *= 0.277778;
        } else if (unit2 == "knot") {
            number *= 0.539957;
        }
    }

    // Perform the conversion if the first unit is fps
    if (unit1 == "fps") {
        // Convert from fps to various units
        if (unit2 == "mph") {
            number *= 0.681818;
        } else if (unit2 == "kph") {
            number *= 1.09728;
        } else if (unit2 == "mps") {
            number *= 0.3048;
        } else if (unit2 == "knot") {
            number *= 0.592484;
        }
    }

    // Perform the conversion if the first unit is mps
    if (unit1 == "mps") {
        // Convert from mps to various units
        if (unit2 == "mph") {
            number *= 2.23694;
        } else if (unit2 == "kph") {
            number *= 3.6;
        } else if (unit2 == "fps") {
            number *= 3.28084;
        } else if (unit2 == "knot") {
            number *= 1.94384;
        }
    }

    // Perform the conversion if the first unit is knot
    if (unit1 == "knot") {
        // Convert from knot to various units
        if (unit2 == "mph") {
            number *= 1.15078;
        } else if (unit2 == "kph") {
            number *= 1.852;
        } else if (unit2 == "fps") {
            number *= 1.68781;
        } else if (unit2 == "mps") {
            number *= 0.514444;
        } 
    }

    // Display the result and unit
    document.getElementById("output").innerHTML = number;
    document.getElementById("result").innerHTML = unit2.charAt(0).toUpperCase() + unit2.slice(1);
}
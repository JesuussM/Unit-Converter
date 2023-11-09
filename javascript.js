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
    
    // Create a map of conversion factors
    const units = new Map([
        ["mph_to_mph", 1],
        ["mph_to_kph", 1.60934],
        ["mph_to_fps", 1.46667],
        ["mph_to_mps", 0.44704],
        ["mph_to_knot", 0.868976],
    ]);

    // Retrieve the number and units from the HTML form
    let number = Number(document.getElementById("input").value);
    let unit1 = document.getElementById("fromValue").value;
    let unit2 = document.getElementById("toValue").value;
    
    // converts to mph
    let conversion = 1 / units.get("mph_to_" + unit1);
    number *= conversion;
    
    // converts to unit2
    conversion = units.get("mph_to_" + unit2);
    number *= conversion;
    
    // Display the result and unit
    document.getElementById("output").innerHTML = number;
    document.getElementById("result").innerHTML = unit2.charAt(0).toUpperCase() + unit2.slice(1);
}


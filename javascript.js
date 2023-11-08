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

    // Define the units and conversion factors
    const units = new Map([
        ["mph_to_mph", number],
        ["mph_to_kph", number * 1.60934],
        ["mph_to_fps", number * 1.46667],
        ["mph_to_mps", number * 0.44704],
        ["mph_to_knot", number * 0.868976],
        ["kph_to_kph", number],
        ["kph_to_mph", number * 0.621371],
        ["kph_to_fps", number * 0.911344],
        ["kph_to_mps", number * 0.277778],
        ["kph_to_knot", number * 0.539957],
        ["fps_to_fps", number],
        ["fps_to_mph", number * 0.681818],
        ["fps_to_kph", number * 1.09728],
        ["fps_to_mps", number * 0.3048],
        ["fps_to_knot", number * 0.592484],
        ["mps_to_mps", number],
        ["mps_to_mph", number * 2.23694],
        ["mps_to_kph", number * 3.6],
        ["mps_to_fps", number * 3.28084],
        ["mps_to_knot", number * 1.94384],
        ["knot_to_knot", number],
        ["knot_to_mph", number * 1.15078],
        ["knot_to_kph", number * 1.852],
        ["knot_to_fps", number * 1.68781],
        ["knot_to_mps", number * 0.514444]
    ]);
    
    // Display the result and unit
    document.getElementById("output").innerHTML = units.get(unit1 + "_to_" + unit2);
    document.getElementById("result").innerHTML = unit2.charAt(0).toUpperCase() + unit2.slice(1);
}
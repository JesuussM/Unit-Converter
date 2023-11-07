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
        if (unit2 == "mph") {
            document.getElementById("output").innerHTML = number;
            document.getElementById("result").innerHTML = "Mph";
            return;
        } else if (unit2 == "kph") {
            document.getElementById("output").innerHTML = number * 1.60934;
            document.getElementById("result").innerHTML = "Kph";
            return;
        } else if (unit2 == "fps") {
            document.getElementById("output").innerHTML = number * 1.46667;
            document.getElementById("result").innerHTML = "Fps";
            return;
        } else if (unit2 == "mps") {
            document.getElementById("output").innerHTML = number * 0.44704;
            document.getElementById("result").innerHTML = "Mps";
            return;
        } else if (unit2 == "knot") {
            document.getElementById("output").innerHTML = number * 0.868976;
            document.getElementById("result").innerHTML = "Knot";
            return;
        }
    }
    
    // Perform the conversion if the first unit is kph
    if (unit1 == "kph") {
        // Convert from kph to various units
        if (unit2 == "mph") {
            document.getElementById("output").innerHTML = number * 0.621371;
            document.getElementById("result").innerHTML = "Mph";
            return;
        } else if (unit2 == "kph") {
            document.getElementById("output").innerHTML = number;
            document.getElementById("result").innerHTML = "Kph";
            return;
        } else if (unit2 == "fps") {
            document.getElementById("output").innerHTML = number * 0.911344;
            document.getElementById("result").innerHTML = "Fps";
            return;
        } else if (unit2 == "mps") {
            document.getElementById("output").innerHTML = number * 0.277778;
            document.getElementById("result").innerHTML = "Mps";
            return;
        } else if (unit2 == "knot") {
            document.getElementById("output").innerHTML = number * 0.539957;
            document.getElementById("result").innerHTML = "Knot";
            return;
        }
    }

    // Perform the conversion if the first unit is fps
    if (unit1 == "fps") {
        // Convert from fps to various units
        if (unit2 == "mph") {
            document.getElementById("output").innerHTML = number * 0.681818;
            document.getElementById("result").innerHTML = "Mph";
            return;
        } else if (unit2 == "kph") {
            document.getElementById("output").innerHTML = number * 1.09728;
            document.getElementById("result").innerHTML = "Kph";
            return;
        } else if (unit2 == "fps") {
            document.getElementById("output").innerHTML = number;
            document.getElementById("result").innerHTML = "Fps";
            return;
        } else if (unit2 == "mps") {
            document.getElementById("output").innerHTML = number * 0.3048;
            document.getElementById("result").innerHTML = "Mps";
            return;
        } else if (unit2 == "knot") {
            document.getElementById("output").innerHTML = number * 0.592484;
            document.getElementById("result").innerHTML = "Knot";
            return;
        }
    }

    // Perform the conversion if the first unit is mps
    if (unit1 == "mps") {
        // Convert from mps to various units
        if (unit2 == "mph") {
            document.getElementById("output").innerHTML = number * 2.23694;
            document.getElementById("result").innerHTML = "Mph";
            return;
        } else if (unit2 == "kph") {
            document.getElementById("output").innerHTML = number * 3.6;
            document.getElementById("result").innerHTML = "Kph";
            return;
        } else if (unit2 == "fps") {
            document.getElementById("output").innerHTML = number * 3.28084;
            document.getElementById("result").innerHTML = "Fps";
            return;
        } else if (unit2 == "mps") {
            document.getElementById("output").innerHTML = number;
            document.getElementById("result").innerHTML = "Mps";
            return;
        } else if (unit2 == "knot") {
            document.getElementById("output").innerHTML = number * 1.94384;
            document.getElementById("result").innerHTML = "Knot";
            return;
        }
    }

    // Perform the conversion if the first unit is knot
    if (unit1 == "knot") {
        // Convert from knot to various units
        if (unit2 == "mph") {
            document.getElementById("output").innerHTML = number * 1.15078;
            document.getElementById("result").innerHTML = "Mph";
            return;
        } else if (unit2 == "kph") {
            document.getElementById("output").innerHTML = number * 1.852;
            document.getElementById("result").innerHTML = "Kph";
            return;
        } else if (unit2 == "fps") {
            document.getElementById("output").innerHTML = number * 1.68781;
            document.getElementById("result").innerHTML = "Fps";
            return;
        } else if (unit2 == "mps") {
            document.getElementById("output").innerHTML = number * 0.514444;
            document.getElementById("result").innerHTML = "Mps";
            return;
        } else if (unit2 == "knot") {
            document.getElementById("output").innerHTML = number;
            document.getElementById("result").innerHTML = "Knot";
            return;
        }
    }
}
/*
File:           script.js
Class:          COMP 4610 GUI Programming I
Assignment:     HW4 Part 1, "Validation Plugin"
Name:           Nathan Khoury
Created:        10/22/2025
Last Modified:  11/24/2025

All dynamic interactivity on the page is handled here. Constant MIN/MAX bounds
are defined and constant document references are also defined. All code begins
execution when the "Generate" button is clicked by the user, which submits
the form and triggers validation via the jQuery Validation plugin. If validation
succeeds, the main table generation driver function is called, which retrieves
user input values and dynamically generates the multiplication table.
*/

/* global variables */
// const globals
const MIN = -50;
const MAX = 50;
const COL_COLOR = "#bbf";
const ROW_COLOR = "#fbb";

// document references
const table = $("#result")[0];

/* main table generation driver, called after jQuery Validation succeeds */
function generate() {
    // debug message
    console.log("generate() called");

    // get user inputs from form, cast to integers
    let colMin = Number(document.getElementById("colMin").value);
    let colMax = Number(document.getElementById("colMax").value);
    let rowMin = Number(document.getElementById("rowMin").value);
    let rowMax = Number(document.getElementById("rowMax").value);

    // debug message to terminal
    console.log("got inputs: " + colMin + ", " + colMax + ", " + rowMin + ", " + rowMax);

    // generate table
    genTable(colMin, colMax, rowMin, rowMax);
}

/* generate the table post-validation */
function genTable(cmin, cmax, rmin, rmax) {
    // https://www.w3schools.com/jsref/met_table_insertrow.asp
    // clear table if any
    table.innerHTML = "";

    // get ranges
    const xRange = cmax - cmin;
    const yRange = rmax - rmin;

    // fill in table
    for (let i = 0; i < yRange + 1; i++) {
        // insert a new ith row
        let row = table.insertRow(i);
        for (let j = 0; j < xRange + 1; j++) {
            // insert a new jth cell
            let cell = row.insertCell(j);
            cell.innerHTML = String((j + cmin)*(i + rmin));
            if ((j + 1) % 2 == 0) {
                // give every other col a darker background for contrast
                cell.style.backgroundColor = COL_COLOR;
            }
        }
        if ((i + 1) % 2 == 0) {
            // give every other row a darker background for contrast
            row.style.backgroundColor = ROW_COLOR;
        }
    
        // manually insert the row label
        let cell = row.insertCell(0);
        cell.innerHTML = i + rmin;
        cell.style.backgroundColor = "black";
        cell.style.color = "white";
    }

    // add the table header at the end
    let header = table.insertRow(0);
    let corner = header.insertCell(0);

    // do not have any content in the corner cell, for aesthetics
    corner.innerHTML = "";
    corner.style.borderStyle = "none";

    // add the column headers
    for (let j = 0; j < xRange + 1; j++) {
        let cell = header.insertCell(j + 1);
        cell.innerHTML =  j + cmin;
        cell.style.backgroundColor = "black";
        cell.style.color = "white";
    }
}

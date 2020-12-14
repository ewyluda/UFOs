// ---------- Arrow Function Practice --------------------------------------------------------

// Original addition function
function addition(a, b) {
    return a + b;
  }

// Converted to an arrow function
addition = (a, b) => a + b;  

// ------------------------------------------------------------------

// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

// Converted to an arrow funtion
doubleAddition = (c, d) => addition(c, d) * 2;


// ------------ End Arrow Function Practice ---------------------------------------------------

// ------------ If statements --------------------------------------------------------------

// if-statement syntax
if ( condition ) { code to execute }

// pseudocode practice
if (a date is entered) {
  Filter the default data to show only the date entered
};
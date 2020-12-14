// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    var inputElementDatetime = d3.select("#datetime");
    var inputElementCity = d3.select("#city");
    var inputElementState = d3.select("#state");
    var inputElementCountry = d3.select("#country");
    var inputElementShape = d3.select("#shape");

    // 4b. Save the value that was changed as a variable.
    var inputValueDatetime = inputElementDatetime.property("value");
    var inputValueCity = inputElementCity.property("value");
    var inputValueState = inputElementState.property("value");
    var inputValueCountry = inputElementCountry.property("value");
    var inputValueShape = inputElementShape.property("value");

    // 4c. Save the id of the filter that was changed as a variable.
    var entryLengthDatetime = inputValueDatetime.length;
    var entryLengthCity = inputValueCity.length;
    var entryLengthState = inputValueState.length;
    var entryLengthCountry = inputValueCountry.length;
    var entryLengthShape = inputValueShape.length;

  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
   

    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    var filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    if (entryLengthDatetime > 0) {
      console.log(inputValueDatetime)
      var filteredData = data.filter(report => report.datetime === inputValueDatetime);
    }
  
    else if (entryLengthCity > 0) {
      var filteredData = data.filter(report => report.city === inputValueCity);
    }
  
    else if (entryLengthState > 0) {
      var filteredData = data.filter(report => report.state === inputValueState);
    }
    
    else if (entryLengthCountry > 0) {
      var filteredData = data.filter(report => report.country === inputValueCountry);
    }
  
    else if (entryLengthShape > 0) {
      var filteredData = data.filter(report => report.shape === inputValueShape);
    }

  console.log(filteredData);

  refresh(filteredData);
  
    // 10. Finally, rebuild the table using the filtered data
    filteredData.forEach((UFOReport) => {
      var row = tbody.append("tr");
      Object.entries(UFOReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll('input').on('change', updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
}
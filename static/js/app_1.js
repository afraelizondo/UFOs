// import data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// Clear out any existing data
function buildTable(data) {
    tbody.html(" ");

// Loop through each object in the data
// and append a row and cells for each value in the row
data.forEach((dataRow) => {
// append a row to the table body
    let row = tbody.append("tr");

// loop through each field in the dataRow and add
// each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
    );
})};

function handleClick() {
// grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;


// check to see if a date was entered and filter
// the data using that date
if (date) {
// apply 'filter' to the table data to only keep
// the rows where 'datetime' value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
};

// rebuild the table using the filtered data
// NOTE: if no date was entered, then the filterData
// will be the original tableData
buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
console.log(tableData)
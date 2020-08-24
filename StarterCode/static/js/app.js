// from data.js
var tableData = data;

// YOUR CODE HERE!
var tBody=d3.select("tbody");
function addingRows(tableList){
tableList.forEach((Sighting)=>{
 var row =tBody.append("tr");
 Object.entries(Sighting).forEach(([key,value])=>{
  var cell= row.append("td");
  cell.text(value);
 })
 
})};

addingRows(tableData)

var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  tBody.html(" ")
  
  // Select the input element and get the raw HTML node
  var dateInputElement = d3.select("#datetime");
  var cityInputElement = d3.select("#city");
  var stateInputElement = d3.select("#state");
  var countryInputElement = d3.select("#country");
  var shapeInputElement = d3.select("#shape");
  // Get the value property of the input element
  var dateInputValue = dateInputElement.property("value");
  var cityInputValue = cityInputElement.property("value");
  var stateInputValue = stateInputElement.property("value");
  var countryInputValue = countryInputElement.property("value");
  var shapeInputValue = shapeInputElement.property("value");


  function ufoFilter(ufo){
    if (dateInputValue!== false || dateInputValue !== null || dateInputValue !== 0 || dateInputValue !== ""){
      
   return ufo.datetime === dateInputValue }

          /*
           ufo.state==stateInputValue &&
           ufo.country==countryInputValue &&
           ufo.shape==shapeInputValue*/
  }

  function cityFilter(ufo){
    if (cityInputValue!== false || cityInputValue !== null || cityInputValue !== 0 || cityInputValue !== ""){
      return ufo.city === cityInputValue
    }

  }
  


 

  var filteredData = tableData.filter(ufoFilter).filter(cityFilter);

  console.log(filteredData);
 
addingRows(filteredData)
}



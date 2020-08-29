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



         
  
   
    

   
    
    // check if there an input
    function testFilter(){
      myBolean ={}
      if (dateInputValue){
       myBolean['date'] = dateInputValue}

      if(cityInputValue){
       myBolean['city'] = cityInputValue}

       if (stateInputValue){
       myBolean['state'] = stateInputValue}

       if (countryInputValue){
       myBolean['country'] = countryInputValue}

       if(shapeInputValue){
       myBolean['shape'] = shapeInputValue}
       console.log(myBolean)
       return myBolean

    
       }

    //filter the acutal data
    function tableFilter(tableList){
      mydicts = testFilter()

console.log(mydicts)
      if(mydicts.date){ if ( filteredData){

      var filteredData = filteredData.filter(ufo=> ufo.datetime==mydicts.date)}

      else{var filteredData = tableList.filter(ufo=> ufo.datetime==mydicts.date)

      }


     }
      if(mydicts.city){
         if ( filteredData){

          var filteredData = filteredData.filter(ufo=> ufo.city==mydicts.city)}
    
          else{var filteredData = tableList.filter(ufo=> ufo.city==mydicts.city)
    
          }}

      if(mydicts.state){if ( filteredData){

        var filteredData = filteredData.filter(ufo=> ufo.state==mydicts.state)}
  
        else{var filteredData = tableList.filter(ufo=> ufo.state==mydicts.state)
  
        }}
        
      if(mydicts.country){if ( filteredData){

        var filteredData = filteredData.filter(ufo=> ufo.country==mydicts.country)}
  
        else{var filteredData = tableList.filter(ufo=> ufo.country==mydicts.country)
  
        }}

      if(mydicts.shape){if (filteredData){

        var filteredData = filteredData.filter(ufo=> ufo.shape==mydicts.shape)}
  
        else{var filteredData = tableList.filter(ufo=> ufo.shape==mydicts.shape)
  
        }}
     

console.log(filteredData)

    return filteredData
    }
        

    addingRows(tableFilter(tableData))

}



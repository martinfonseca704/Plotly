//////12.3.1 Inspect an API call with D3.json()
const url = "https://api.spacexdata.com/v2/launchpads";
//d3.json(url).then(receivedData => console.log(receivedData));
//d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));
//d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

//access the latitude of the Vandenberg Airforce Base
//d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));


//////12.3.2 Load a JSON file with D3.json()
// d3.json(url).then();

// d3.json("samples.json").then(function(data){
//     console.log("hello");
// });

//extract only the wfreq, or the weekly belly button washing frequency, of each person into a new array.
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq);
//     console.log(wfreq);
// });

//sort the wfreq array in descending order
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     console.log(wfreq);
// });

// to delete null values from the sorted wfreq array
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     filteredWfreq = wfreq.filter(element => element !=
// null);
//     console.log(filteredWfreq);
// });

//Use Object.entries() to print each key-value pair inside an array.
//console.log(Object.entries(object.goes.here));

// to pull various keys & values
// researcher1.forEach(([first, second]) => console.log(first
//     + ": " + second));

//display the metadata of any individual from the dataset
// d3.json("samples.json").then(function(data){
//     firstPerson = data.metadata[0];
//     Object.entries(firstPerson).forEach(([key, value]) =>
//       {console.log(key + ': ' + value);});
// });

//12.4.1 JavaScript Event Listeners
//d3.selectAll("body").on("change", updatePage);

// function updatePage() {
//   var dropdownMenu = d3.selectAll("#selectOption").node();
//   var dropdownMenuID = dropdownMenu.id;
//   var selectedOption = dropdownMenu.value;

//   console.log(dropdownMenuID);
//   console.log(selectedOption);
// };

function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] 
    }];
    Plotly.newPlot("plot", data);
  };
  
  d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");
  
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
  
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  
    var trace = {
      x: [xData],
      y: [yData],
    };
    Plotly.restyle("plot", trace);
  };
  
  init();








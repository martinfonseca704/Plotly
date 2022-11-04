////// This code is to only be added in the Console \\\\\\


//12.2.2 Practicing JavaScript Methods
//Sort and Select the Cities

// console.log(cityGrowths);

// var sortedCities = cityGrowths.sort((a,b) =>
// a.Increase_from_2016 - b.Increase_from_2016).reverse();
// console.log(sortedCities);

// var topFiveCities = sortedCities.slice(0,5);
// console.log(topFiveCities);

//Create Arrays of City Names and Growth Figures
// var topFiveCityNames = cityGrowths.map(city => city.City);
// console.log(topFiveCityNames);

// var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));
// console.log(topFiveCityGrowths);

//Create a Bar Chart with the Arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);
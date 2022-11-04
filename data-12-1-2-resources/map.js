//12.2.1 Functional JavaScript
// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(function(num){
//     return num * 2;
// });
// console.log(doubled);

// var doubled = numbers.map(function(integer) {
//     return integer * 2;
//     });
// ////or
// var doubled = numbers.map(function(carPrice) {
//     return carPrice * 2;
//     });

// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityNames = cities.map(function(city){
//     return city.City;
// });
// console.log(cityNames);

//SKILL DRILL
// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityPop = cities.map(function(population){
//     return population.population;
// });
// console.log(cityPop);

//The filter() Method
// var numbers = [1,2,3,4,5];

// var larger = numbers.filter(function(num){
//     return num > 1;
// });
// console.log(larger)

// var familyAge = [2,3,39,37,9]; 
// var olderThanFive = familyAge.filter(function(age){
//     return age > 5;
// });

//Arrow Function
// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(num => num * 2);
// console.log(doubled)

// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((a,b) => a - b);
// console.log(sortedAge);

// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
// anotherElement);

//The slice() Method
// var integers = [0,1,2,3,4,5];
// var slice1 = integers.slice(0,2);

// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// words.slice(3, );

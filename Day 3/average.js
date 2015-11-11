var numbers = "70:80:90:100";

function averageColon (string) {
  var numbersArray = numbers.split(":");
  var total = 0;
  var min = 0;
  var max = 0;

  numbersArray.reduce(function (pre, number){
    total = parseInt(pre) + parseInt(number);
    return total;
  });

  return total/numbersArray.length;
}

console.log(averageColon(numbers));

// Creating a module
module.exports = MyApp;

// Importing it in there server
var anApp = require("./MyApp.js")

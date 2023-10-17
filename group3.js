const prompt = require('prompt-sync')();
const lastnum = prompt("Enter value ");

function displaySeriesAndSum(lastnum) {
 let series = [];
 let sum = 0;
 
 for (let i = 1; i <= lastnum; i++) {
 series.push(i);
 sum += i;
 }

 console.log("Series:", series.join(", "));
 console.log("Sum:", sum);
}

// Example usage:
displaySeriesAndSum(lastnum);
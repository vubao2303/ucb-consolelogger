/*
The mean is the average, 
so sum all numbers and then 
divide by the total number of integers 
in the input array. 
*/

function calculateSum(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function calculateMean(arr) {
	var mean = calculateSum(arr) / arr.length;
	return mean;
}

console.log(calculateMean([1, 2, 3, 4, 5])) // 3

console.log(calculateMean([100, 8, 25, 10, 90])) // 46.6

// arr.map can be done with a for loop 


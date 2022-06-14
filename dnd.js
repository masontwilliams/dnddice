/*This Javascript calculates the sum of a series of random numbers generated from different "die."
The user is instructed to put in each input of the HTML how many die they would like to roll.
When they click "roll," the javascript takes that number and iterates that number of times through
to determine their "roll" values. It then adds them all up for a sum in case the game calls for it.*/

/*
 *  'roll' takes in the following arguments:
 *  * sides: number of sides
 *  * elementId: id of input element to fetch number of dice
 */
function roll(sides, elementId) {
	var count = document.getElementById(elementId).value;	// pulls data from HTML and sets it equal to the count
	const rollNumbers = [];									// initializes the list that will eventually be printed onto the HTML page
	var sum = 0;											// initializes a variable that will hold the value of the sum of all random numbers at the end
	
	for (var i = count; i > 0; i-- ) {							// for loop that iterates based on the count
		var rollnum = Math.floor((Math.random() * sides) + 1);	// initializing integer to equal a random integer
		sum = sum + rollnum;									// setting the sum to equal to itself plus the random integer
		rollNumbers.push(rollnum);								// append the random integer to the list
	}
		
	document.getElementById('result').innerHTML = rollNumbers.join(" | ");	// write all of the integers from the list onto the html page and separate each with a "|"
	document.getElementById('sum').innerHTML = 'Sum: ' + sum;				// write the sum of all the integers below the result
}

// die function pulling from the given input on the html, all using the shared 'roll' function
document.getElementById('fourSided').addEventListener('click', function() {
	roll(4, 'numberFoursided');
});			

document.getElementById('sixSided').addEventListener('click', function() {
	roll(6, 'numberSixsided');
});

document.getElementById('eightSided').addEventListener('click', function() {
	roll(8, 'numberEightsided');
});

document.getElementById('tenSided').addEventListener('click', function() {
	roll(10, 'numberTensided');
});

document.getElementById('twelveSided').addEventListener('click', function() {
	roll(10, 'numberTwelvesided');
});

document.getElementById('twentySided').addEventListener('click', function() {
	roll(20, 'numberTwentysided');
});
/*This Javascript calculates the sum of a series of random numbers generated from different "die."
The user is instructed to put in each input of the HTML how many die they would like to roll.
When they click "roll," the javascript takes that number and iterates that number of times through
to determine their "roll" values. It then adds them all up for a sum in case the game calls for it.*/



document.getElementById("fourSided").addEventListener('click', rollFoursided)			//die function pulling from the first input on the html
function rollFoursided()									
	{
		var count = document.getElementById("numberFoursided").value;			// pulls data from HTML and sets it equal to the count
		const rollNumbers = [];								// initializes the list that will eventually be printed onto the HTML page
		var sum = 0;									// initializes a variable that will hold the value of the sum of all random numbers at the end
		
		while (count != 0) {								// while loop that iterates based on the count
			var rollnum = Math.floor((Math.random() * 4) + 1);			// initializing integer to equal a random integer
			sum = sum + rollnum;							// setting the sum to equal to itself plus the random integer
			rollNumbers.push(rollnum);						// append the random integer to the list
			count = count - 1;							// subtract 1 from the count
			
		}
			
		document.getElementById('result').innerHTML = rollNumbers.join(" | ");		// write all of the integers from the list onto the html page and separate each with a "|"
		document.getElementById('sum').innerHTML = 'Sum: ' + sum;			// write the sum of all the integers below the result

	}


/*The rest of the functions in this file do the same as described above but with more "sides,"
(larger range of integers from which integers are selected). Please refer to the function above
for similar guidance*/


document.getElementById("sixSided").addEventListener('click', rollSixsided)
function rollSixsided()
	{
		var count = document.getElementById("numberSixsided").value;
		const rollNumbers = [];
		var sum = 0;

		while (count != 0) {
			var rollnum = Math.floor((Math.random() * 6) + 1);
			sum = sum + rollnum;
			rollNumbers.push(rollnum);
			count = count - 1;
		}

		document.getElementById('result').innerHTML = rollNumbers.join(" | ");
		document.getElementById('sum').innerHTML = 'Sum: ' + sum;
	}

document.getElementById("eightSided").addEventListener('click', rollEightsided)
function rollEightsided()
	{
		var count = document.getElementById("numberEightsided").value;
		const rollNumbers = [];
		var sum = 0;

		while (count != 0) {
			var rollnum = Math.floor((Math.random() * 8) + 1);
			sum = sum + rollnum;
			rollNumbers.push(rollnum);
			count = count - 1;
		}

		document.getElementById('result').innerHTML = rollNumbers.join(" | ");
		document.getElementById('sum').innerHTML = 'Sum: ' + sum;	
	}

document.getElementById("tenSided").addEventListener('click', rollTensided)
function rollTensided()
	{
		var count = document.getElementById("numberTensided").value;
		const rollNumbers = [];
		var sum = 0;

		while (count != 0) {
			var rollnum = Math.floor((Math.random() * 10) + 1);
			sum = sum + rollnum;
			rollNumbers.push(rollnum);
			count = count - 1;

		}
		
		document.getElementById('result').innerHTML = rollNumbers.join(" | ");
		document.getElementById('sum').innerHTML = 'Sum: ' + sum;

	}

document.getElementById("twelveSided").addEventListener('click', rollTwelvesided)
function rollTwelvesided()
	{
		var count = document.getElementById("numberTwelvesided").value;
		const rollNumbers = [];
		var sum = 0;

		while (count != 0) {
			var rollnum = Math.floor((Math.random() * 12) + 1);
			sum = sum + rollnum;
			rollNumbers.push(rollnum);
			count = count - 1;
		}

		document.getElementById('result').innerHTML = rollNumbers.join(" | ");
		document.getElementById('sum').innerHTML = 'Sum: ' + sum;
	}

document.getElementById("twentySided").addEventListener('click', rollTwentysided)
function rollTwentysided()
	{
		var count = document.getElementById("numberTwentysided").value;
		const rollNumbers = [];
		var sum = 0;

		while (count != 0) {
			var rollnum = Math.floor((Math.random() * 20) + 1);
			sum = sum + rollnum;
			rollNumbers.push(rollnum);
			count = count - 1;
		}

		document.getElementById('result').innerHTML = rollNumbers.join(" | ");
		document.getElementById('sum').innerHTML = 'Sum: ' + sum;
	}

function binarySearch(array, targetValue) {
    let min = 0;
	let max = array.length - 1;
    let guess;
    while(max >= min) {
        guess = Math.floor((max + min) / 2);
        if(array[guess] === targetValue) {
            return guess;
        } else if(array[guess] < targetValue) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }
	return -1;
};

const array = [1, 2, 3];
console.log(binarySearch(array, 3));
console.log(binarySearch(array, 4))
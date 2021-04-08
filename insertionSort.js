function insert(array, j, value) {
    while((j > -1) && (value < array[j])) {
        array[j+1] = array[j];
        j--;
    }
    array[j+1] = value;
    console.log(array);
}

function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
        insert(array, i-1, array[i]);
    }
    return(array);
}

const testArray = [10, 7, 3, 13, 2, 8, 5];
const sortedArray = insertionSort(testArray);
console.log("sorted array: " + sortedArray);
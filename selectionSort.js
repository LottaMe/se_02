function selectionSort(array) {
    for(let i = 0; i < array.length ; i++) {
        var minIndex = indexOfMinimum(array, i);
        swap(array, i, minIndex);
    }
    return array;
};

function swap(array, firstIndex, secondIndex) {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

function indexOfMinimum(array, startIndex) {

    let minValue = array[startIndex];
    let minIndex = startIndex;

    for(let i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

console.log(selectionSort([3, 5, 1, 2]))
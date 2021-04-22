function mergeSort(array) {
    const half = array.length / 2;
    // Base case
    if(array.length < 2){
      return array;
    }
    const left = array.splice(0, half);
    return merge(mergeSort(left),mergeSort(array));
}

function merge(left, right) {
    let arr = [];
    // Loop ends if one of the two arrays is empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        // The subarrays are already sorted. shift() also removes the first element
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    
    // Concatenating the leftover elements (either left or right is already empty)
    return [ ...arr, ...left, ...right ];
}

let test = [14, 2, 9, 12, 11, 7, 3, 6];
console.log(mergeSort(test));
console.log(" should equal 2, 3, 6, 7, 9, 11, 12, 14")
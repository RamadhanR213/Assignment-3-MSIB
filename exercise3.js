function sumArray(arr, int) {
    let result = []; 

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === int) {
                result.push([arr[i], arr[j]]);
            }
        }
    }

    return result;
}

// TEST CASES
console.log(sumArray([2, 1, 4, 3], 5)); // Output: [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // Output: [[1, 10], [8, 3]]

// Nama: Raihan Ramadhan
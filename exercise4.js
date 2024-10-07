function arrSum(array) {
    let max = array[0], maxEnd = array[0];
    let start = 0, end = 0, tempStart = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxEnd + array[i]) {
            maxEnd = array[i];
            tempStart = i;
        } else {
            maxEnd += array[i];
        }

        if (maxEnd > max) {
            max = maxEnd;
            start = tempStart;
            end = i;
        }
    }

    return [array.slice(start, end + 1), max];
}

console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3]));
// Output: [[4, -1, -2, 1, 5], 7]

// Nama: Raihan Ramadhan
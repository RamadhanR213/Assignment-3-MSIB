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
// step 1
// max = array[0] (-2), maxEnd = array[1] (-3)
// start = 0, end = 0, tempStart = 1

// step 2
// max = array[2] (4), maxEnd = array[2] (4)
// start = 2, end = 2, tempStart = 2

// step 3
// max = array[2] (4), maxEnd = 3
// start = 2, end = 2, tempStart = 2

// step 4
// max = array[2] (4), maxEnd = 1
// start = 2, end = 2, tempStart = 2

// step 5
// max = array[2] (4), maxEnd = 2
// start = 2, end = 2, tempStart = 2

// step 6
// max = array[2] (7), maxEnd = array[6] (7)
// start = 2, end = 6, tempStart = 2

// step 7
// max = array[2] (7), maxEnd = 4
// start = 2, end = 6, tempStart = 2

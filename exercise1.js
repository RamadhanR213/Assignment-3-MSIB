function isArithmeticProgression(numbers) {
    if (numbers.length <= 2) {
        console.log(numbers, true);
        return true; 
    }
    
    let difference = numbers[1] - numbers[0]; 
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] - numbers[i - 1] !== difference) {
            console.log(numbers);
            return false;
        }
    }

    console.log(numbers);
    return true;
}

/// TEST CASES
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false

// Nama: Raihan Ramadhan

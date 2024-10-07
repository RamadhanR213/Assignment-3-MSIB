function threeStepsAB(text) {
    for (let i = 0; i < text.length - 4; i++) {
        if ((text[i] === 'a' && text[i + 4] === 'b') || (text[i] === 'b' && text[i + 4] === 'a')) {
            return true;
        }
    }
    return false;
}

// TEST CASES
console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('li am sickd')); // false
console.log(threeStepsAB('you are boring')); // true
console.log(threeStepsAB('barbarian')); // true
console.log(threeStepsAB('bacon and meat')); // false

// Nama: Raihan Ramadhan
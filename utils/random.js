function generateRandom8Digit(){
    const min = 10000000; // Minimum 8-digit number (10^7)
    const max = 99999999; // Maximum 8-digit number (10^8 - 1)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {generateRandom8Digit}
function calculateAverage(numbers) {

    if(!Array.isArray(numbers)) {
            throw new TypeError("calculateAverage expects an array of numbers");
        }
        
    if (numbers.length === 0) return 0;

    let sum = 0;

    for (let i = 0 ; i < numbers.length; i++ ){

        const n = Number(numbers[i]);

        if(Number.isNaN(n)) {
         throw new TypeError("All items in the array must be numbers or numeric strings");
        }

        sum += n;
    }
    return sum/numbers.length;
    // aaaaaaa

}
module.exports = {calculateAverage}
let calc = require('../utils/calcAverage');

console.log('Average [10, 20, 30] =', calc.calculateAverage([10, 20, 30]));
console.log('Average ["5", 15, 10] =', calc.calculateAverage(["5", 15, 10]));
console.log('Average [] =', calc.calculateAverage([]));

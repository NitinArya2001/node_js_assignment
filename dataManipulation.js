function sumArray(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error('Input must be an array.');
    }
  
    // Ensure all elements in the array are numbers
    if (!numbers.every((num) => Number.isInteger(num))) {
      throw new Error('All elements in the array must be integers.');
    }
  
    // Calculate the sum
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
  }
  
  module.exports = sumArray;
  
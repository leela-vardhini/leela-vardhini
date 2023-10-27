/**creating the function to check the given number is prime 
 * or not and counting the digits of the input
 * @param {number} the number to count the digits 
 * @returns the number 
 */
  function isOneDigitDifference(number) {
    const numString = number.toString();
    for (let i = 0; i < numString.length - 1; i++) {
      const digit1 = parseInt(numString[i]);
      const digit2 = parseInt(numString[i + 1]);
      if (Math.abs(digit1 - digit2) !== 1) {
        return false;
      }
    }
    return true;
  }
  /**to check the number is prime or not 
   * 
   * @param {number} take the input number
   * @returns the values  
   */
  function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
  }

  //to check and print the ODD numbers and prime numbers 
  //between the  range


  function findAndPrintPrimeODDNumbersInRange(startingNumber, lastNumber) {
    for (let i = startingNumber; i <= lastNumber; i++) {
      if (isOneDigitDifference(i) && isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  const startingNumber = 12;
  const lastNumber = 345456;
  
  findAndPrintPrimeODDNumbersInRange(startingNumber, lastNumber);

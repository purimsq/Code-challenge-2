function findPrime(array) {
    const primes = [];
    // Check for prime numbers 
    function isPrime(num) {
        if (num <= 1)  return false
        if (num <= 3) return true
        if (num % 2 === 0 || num % 3 === 0) return false
    
    // Check for prime numbers greater than 3
    for (let i =5; i * i <= num; i +=6 ) {
        if (num % i === 0 || num % (i + 2) === 0) return false
    }
    return true
    }
    
    for (const num of array ) {
        // Check if the number is prime using the isPrime function
        if (isPrime(num)) {
            primes.push(num)
        }
    }
    // Return the prime numbers
    return primes
    
    }
    // Test the function using an array
    const array =  [41,42,44,46,66]
    
    console.log(findPrime(array))



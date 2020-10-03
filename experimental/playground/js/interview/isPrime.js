function isPrime(n) {
    if (n <= 0) {
        return false;
    }

    if (n === 1 || n === 2) {
        return true;
    }

    for (let i = 2; i<= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

const n = process.argv[2];
console.log(isPrime(n));
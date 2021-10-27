const arguments = process.argv.slice(2);

function showPrimeNumbers(lownumber, highnumber) {
    for (var i = lownumber; i <= highnumber; i++) {
        let isPrime = true;
        for (j = 2; j <= i; j++) {
            if (i % j === 0 && j !== i) {
                isPrime = false;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}

showPrimeNumbers(arguments[0] * 1, arguments[1] * 1);
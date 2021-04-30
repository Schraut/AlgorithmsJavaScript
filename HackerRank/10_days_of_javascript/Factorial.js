function factorial(n) {
    // if number is less than 0, it's not factorial
    if (n < 0) {
        console.log(n);
        return -1;
        // if the number is 0, its factorial is 1
    } else if (n == 0) {
        console.log(n);
        return 1;
    } else {
        // use recursion
        console.log(n);
        return (n * factorial(n - 1));
    }
};

factorial(5);
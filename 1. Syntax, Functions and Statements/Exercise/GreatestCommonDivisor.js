function greatestCommonDivisor(x, y) {
    let num1 = Number(x);
    let num2 = Number(y);
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

console.log(greatestCommonDivisor(15, 5));
console.log(greatestCommonDivisor(2154, 458));
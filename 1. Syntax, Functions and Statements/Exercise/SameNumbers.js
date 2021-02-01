function sameNumbers(number) {
    let flag = true;

    let numAsString = String(number);
    let sum = Number(numAsString.charAt(numAsString.length - 1));
    for (let i = 0; i < numAsString.length - 1; i++) {
        sum += Number(numAsString.charAt(i));
        if (numAsString.charAt(i) !== numAsString.charAt(++i)) {
            flag = false;
        }
        i--;
    }

    return `${flag}\n${sum}`;
}

console.log(sameNumbers(2222222));
function solve(arr, step) {
    // let result = [];
    //
    // for (let i = 0; i < arr.length; i++) {
    //     if (i % step === 0) {
    //         result.push(arr[i]);
    //     }
    // }

    let result = arr.filter((el, i) => i % step == 0);
    return result;
}

console.log(solve(
    ['5',
        '20',
        '31',
        '4',
        '20'],
    2
));
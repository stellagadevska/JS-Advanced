const solve = (arr, delimiter) => {
    // let result = '';
    //
    // for (let i = 0; i < arr.length; i++) {
    //     result += i == arr.length - 1 ? arr[i] : (arr[i] + delimiter)
    // }
    //
    // return result;

    return arr.join(delimiter);
}

console.log(solve(
    ['One',
        'Two',
        'Three',
        'Four',
        'Five'],
    '-'
));
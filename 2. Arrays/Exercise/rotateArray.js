function solve(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        const elem = arr.pop();
        arr.unshift(elem);
    }

    return arr.join(' ');
}

console.log(solve(
    ['1',
        '2',
        '3',
        '4'],
    2

));

console.log(solve(
    ['Banana',
        'Orange',
        'Coconut',
        'Apple'],
    15

));
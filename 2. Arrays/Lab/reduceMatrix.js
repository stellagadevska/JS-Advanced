let jaggedMatrix = [
    [4, 6, 3, 0],
    [2, 1, -2],
    [-5, 17],
    [7, 3, 9, 12]
];

let result = jaggedMatrix.reduce(matrixReducer);

console.log(result);

function matrixReducer(acc, c) {
    return acc.concat(c);
}

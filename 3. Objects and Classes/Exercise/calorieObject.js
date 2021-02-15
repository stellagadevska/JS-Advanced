function solve(input) {
    let obj = {};

    // for (let i = 0; i < input.length; i+= 2) {
    //     obj[input[i]] = Number(input[i+1]);
    // }

    input.forEach((el, i) => {
        if (i % 2 === 0) {
            obj[el] = undefined;
        } else {
            obj[input[i - 1]] = Number(el);
        }
    })

    return obj;

}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
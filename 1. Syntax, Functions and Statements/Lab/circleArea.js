function solve(input) {
    let inputType = typeof(input);
    if (inputType === 'number') {
        let area = input * input * Math.PI;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}

solve(5);
solve("Kotka");
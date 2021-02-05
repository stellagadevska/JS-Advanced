function solve(n, k) {
    let array = [1];

    for (let i = 1; i < n; i++)  {
        for (let i = 1; i < n; i++){
            let result = array.slice(-k);
            let sum = 0;
            for (el of result){
                sum += el;
            }
            result.push(sum);
        }
        array.join(' ')
        return array;
    }
}

console.log(solve(6, 3));
console.log(solve(8, 2));
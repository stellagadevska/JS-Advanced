function firstAndLast(string) {
    let first = Number([...string].shift());
    let last = Number([...string].pop());

    return first + last;
}

console.log(firstAndLast(['20', '30', '40']));
console.log(firstAndLast(['5', '10']));
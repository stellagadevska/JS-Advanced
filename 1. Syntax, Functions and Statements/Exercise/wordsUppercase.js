function upperCase(string) {
    const words = string.match(/\w+/gm);
    const result = words.join(', ').toUpperCase();
    return result;
}

console.log(upperCase('Hi, how are you?'));
console.log(upperCase('hello'));
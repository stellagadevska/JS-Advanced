function cooking(inputNumber, operat1, operat2, operat3, operat4, operat5) {
    let num = +inputNumber;

    const arr = [operat1, operat2, operat3, operat4, operat5];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num++;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num *= 0.8;
                break;
        }

        console.log(num);
    }


}

console.log(cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop'));
console.log(cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));
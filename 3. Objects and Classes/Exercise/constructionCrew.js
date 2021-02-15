function solve(inputObject) {
    if (inputObject.dizziness) {
        inputObject.levelOfHydrated += inputObject.weight * 0.1 * inputObject.experience;
        inputObject.dizziness = false;
    }

    return inputObject;
}

console.log(solve({weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
));

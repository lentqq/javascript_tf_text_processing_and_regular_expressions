function printCharacters(string) {
    // First way

    for (let i = 0; i < string.length; i++) {
        console.log(string.charAt(i));
    }

    // Second way

    for (const character of string) {
        console.log(character);
    }
}

printCharacters('Nikolay')
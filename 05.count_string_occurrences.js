function countStringsOccurrences(string, searshedWord) {
    let matchWord = string.split(' ');
    let count = 0;

    for (const word of matchWord) {
        if (word === searshedWord) {
            count++;
        }
    }
    console.log(count);
}

countStringsOccurrences('This is a word and it also is sentence', 'is')
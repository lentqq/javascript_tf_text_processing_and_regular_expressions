function countStringsOccurrences(string, matchingWord) {
    let searchingWords = string.split(' ');
    let count = 0;

    for (const word of searchingWords) {
        if (word === matchingWord) {
            count++;
        }
    }
     console.log(count);
}

countStringsOccurrences('This is a word and it also is sentence', 'is')
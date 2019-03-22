function censoredWords(text, word) {
    let censoredText = text;
    while (censoredText.includes(word)) {
     censoredText = censoredText.replace(word, '*'.repeat(word.length));        
    }
console.log(censoredText);
}

censoredWords('A small sentance width some words and another small word and another small word.', 'small')
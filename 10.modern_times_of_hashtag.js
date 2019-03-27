function hashTag(text) {

// First way

    let words = text.split(' ');
    
    for (let word of words) {

        if (word[0] === '#' && word.length > 1) {
            console.log(word.slice(1));
        }
    }

    // Second way

    text.split(' ').forEach(word => {
        if (word[0] === '#' && word.length > 1) {
                    console.log(word.slice(1));
                }
    });
}

hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
function matchFullName(text) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let result = [];
    let match = '';
    while ((match = pattern.exec(text)) !== null) {
        result.push(match);
    }
    console.log(result.join(' '));
}

matchFullName('Steven Son, Steven son, steven Son, STeven Son, Michael Braun, MichaelBraun')
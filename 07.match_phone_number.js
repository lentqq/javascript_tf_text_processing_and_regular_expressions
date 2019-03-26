function matchPhoneNumber(text) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}/g;
    let match = '';
    let result = [];

    while ((match = pattern.exec(text)) !== null) {
            result.push(match[0]);
    }

    console.log(result.join(', '));
}

matchPhoneNumber('+359 2 222 2222, 359-2-222-2222, +359/2/222/2222, +359-2 222 2222, +359 2-222-2222, +359-2-222-222, +359-3-222-22222, +359-2-222-2222')
function palindrome(array) {
    let palindromesArr = [];

    array.forEach(element => {
        let string = element
        .split(' ')
        .join('');
        let reversedString = string
        .split('')
        .reverse()
        .join('');

        if (string === reversedString) {
            palindromesArr.push(string);
        }
    });

    if (palindromesArr.length > 0) {
        
        console.log(palindromesArr.join(', '));

    }
    else {
        console.log('No plaondromes found');
    }
}

palindrome(['stella won no wallets', 'not a palindrome', 'potop', 'price', 'pop'])
function validatePassword(password) {
    if(!password) {
        return false;
    }

    // Verify password length
    if(password.length < 8) {
        return false
    }

    // Verify if there's letters
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';

    let passwordHasLetter = false;
    let passwordHasNumber = false;
    for(const character of password.toLowerCase()) {
        if(alphabet.includes(character)) {
            passwordHasLetter = true
        }

        if(numbers.includes(character)) {
            passwordHasNumber = true
        }
    }

    if(passwordHasLetter && passwordHasNumber) {
        return true
    } else {
        return false
    }
}

module.exports = validatePassword;
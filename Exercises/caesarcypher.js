function caesarCipher (message, shift) {
    var shift = shift === undefined ? -3 : shift;
    var encryption = message.split("");
    var result = "";

    for (var i = 0; i < encryption.length; i++) {

        if (encryption[i] >= "a" && encryption[i] <= "z") {
            var letter = encryption[i].charCodeAt() + shift;
            if (letter < 97) {
                result += String.fromCharCode(letter + 26);
            } else if (letter > 122) {
                result += String.fromCharCode(letter - 26);
            } else {
                result += String.fromCharCode(letter)
            };
        } else if (encryption[i] >= "A" && encryption[i] <= "Z") {
            var letter = encryption[i].charCodeAt() + shift;
            if (letter < 65) {
                result += String.fromCharCode(letter + 26);
            } else if (letter > 90) {
                result += String.fromCharCode(letter - 26);
            } else {
                result += String.fromCharCode(letter)
            };
        } else {
            result += encryption[i];
        };
    };

    return result;
}


var encrypted = caesarCipher("Et tu, brute?", 6);

console.log(encrypted);
//=> "_orqrp"

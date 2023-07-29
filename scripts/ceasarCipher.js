const letters = 'abcdefghijklmnopqrstuvwxyz';
const letters2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

 
function ceasarCipher(string, shift) {
    let cipher = '';

    for(let i = 0; i < string.length; i++) {
        const letter = string.charAt(i)

        if(letters.includes(letter)) {
            const originalIndex = letters.indexOf(letter);
            const shiftIndex = (originalIndex + shift) % 26;
            cipher += letters.charAt(shiftIndex);
        } else if(letters2.includes(letter)) {
            const originalIndex = letters2.indexOf(letter);
            const shiftIndex = (originalIndex + shift) % 26;
            cipher += letters2.charAt(shiftIndex);
        } else {
            cipher += letter;
        }

    }

    return cipher;
}
export default ceasarCipher;
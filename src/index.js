const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    const arr = Array. from(expr);
    const arrExpr = [];

    for (let i = 0 ; i < arr.length; i += 10) {
        const part = arr.slice(i, i + 10);
        arrExpr.push(part);
    } // arrays with 10 numbers made

    const newArr = [];

    arrExpr.forEach((element) => {
        newString = '';
        if (element[1] === '*') {
            newArr.push('*');
        } else {
            for (i = 0; i <element.length; i = i + 2) {
                if ((element[i] === '1') && (element[i+1] === '1')) {
                    newString = newString + '-';
                } else if ((element[i] === '1') && (element[i+1] === '0')) {
                    newString = newString + '.';
                }
            }
            newArr.push(newString);
        }
    }) // array with '-', '.' and '*' made

    let str = '';
    let keys = Object.keys(MORSE_TABLE);
    let values = Object.values(MORSE_TABLE);

    newArr.forEach((element) => {
        if (element === '*') {
            str = str + ' ';
        } else {
            for (let i = 0; i < keys.length; i++) {
                if (element === keys[i]) {
                    str = str + values[i];
                }
            }
        }
    }) // making decoding

    return str; 

}

module.exports = {
    decode
}
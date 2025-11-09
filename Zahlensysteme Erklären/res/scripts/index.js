function scrollToID(id) {
    document.querySelector('#' + id).scrollIntoView({
        behavior: 'smooth'
    });
}

function decimalToBinary(decimalNumber) {
    if (isNaN(decimalNumber) || decimalNumber < 0) {
        return 'ungültige Eingabe';
    }
    return Number(decimalNumber).toString(2);
}

function binaryToDecimal(binaryNumber) {
    if (!/^[01]+$/.test(binaryNumber.toString())) {
        return 'ungültige Eingabe';
    }
    return parseInt(binaryNumber, 2).toString(10);
}

function decimalToHex(decimalNumber) {
    if (isNaN(decimalNumber) || decimalNumber < 0) {
        return 'ungültige Eingabe';
    }
    return decimalNumber.toString(16).toUpperCase();
}

function hexToDecimal(hexNumber) {
    if (!/^[0-9A-Fa-f]+$/.test(hexNumber)) {
        return 'ungültige Eingabe';
    }
    return parseInt(hexNumber, 16);
}

function binaryConverterSwap() {
    const labelbinary = document.getElementById('binary-converter-label-binary');
    const labeldecimal = document.getElementById('binary-converter-label-decimal');
    const inputbinary = document.getElementById('binary-converter-binary');
    const inputdecimal = document.getElementById('binary-converter-decimal');

    const isBinaryColumn1 = labelbinary.classList.contains('column-1');

    labelbinary.classList.replace(isBinaryColumn1 ? 'column-1' : 'column-3', isBinaryColumn1 ? 'column-3' : 'column-1');
    labeldecimal.classList.replace(isBinaryColumn1 ? 'column-3' : 'column-1', isBinaryColumn1 ? 'column-1' : 'column-3');

    inputbinary.classList.replace(isBinaryColumn1 ? 'input' : 'output', isBinaryColumn1 ? 'output' : 'input');
    inputbinary.disabled = isBinaryColumn1;

    inputdecimal.classList.replace(isBinaryColumn1 ? 'output' : 'input', isBinaryColumn1 ? 'input' : 'output');
    inputdecimal.disabled = !isBinaryColumn1;
}

function binaryConverterConvert() {
    const inputbinary = document.getElementById('binary-converter-binary');
    const inputdecimal = document.getElementById('binary-converter-decimal');

    if(!inputbinary.disabled) {
        inputdecimal.value = binaryToDecimal(inputbinary.value);
    } else {
        inputbinary.value = decimalToBinary(inputdecimal.value);
    }
}

function hexConverterSwap() {
    const labelhex = document.getElementById('hex-converter-label-hex');
    const labeldecimal = document.getElementById('hex-converter-label-decimal');
    const inputhex = document.getElementById('hex-converter-hex');
    const inputdecimal = document.getElementById('hex-converter-decimal');

    const isHexColumn1 = labelhex.classList.contains('column-1');

    labelhex.classList.replace(isHexColumn1 ? 'column-1' : 'column-3', isHexColumn1 ? 'column-3' : 'column-1');
    labeldecimal.classList.replace(isHexColumn1 ? 'column-3' : 'column-1', isHexColumn1 ? 'column-1' : 'column-3');

    inputhex.classList.replace(isHexColumn1 ? 'input' : 'output', isHexColumn1 ? 'output' : 'input');
    inputhex.disabled = isHexColumn1;

    inputdecimal.classList.replace(isHexColumn1 ? 'output' : 'input', isHexColumn1 ? 'input' : 'output');
    inputdecimal.disabled = !isHexColumn1;
}

function hexConverterConvert() {
    const inputhex = document.getElementById('hex-converter-hex');
    const inputdecimal = document.getElementById('hex-converter-decimal');

    if(!inputhex.disabled) {
        inputdecimal.value = hexToDecimal(inputhex.value);
    } else {
        inputhex.value = decimalToHex(inputdecimal.value);
    }
}
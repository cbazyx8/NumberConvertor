function convertNumber() {
    const inputNumber = document.getElementById('input-number').value;
    const inputBase = parseInt(document.getElementById('input-base').value);
    const outputBase = parseInt(document.getElementById('output-base').value);

    if (inputNumber === '') {
        alert('Please enter a number');
        return;
    }

    // Validate input number based on input base
    const validChars = {
        2: /^[01]+$/,
        8: /^[0-7]+$/,
        10: /^[0-9]+$/,
        16: /^[0-9a-fA-F]+$/
    };

    if (!validChars[inputBase].test(inputNumber)) {
        alert(`Invalid number for base ${inputBase}`);
        return;
    }

    // Convert input number to decimal (base 10)
    const decimalNumber = parseInt(inputNumber, inputBase);

    // Convert decimal number to output base
    const convertedNumber = decimalNumber.toString(outputBase).toUpperCase();

    // Display the result
    document.getElementById('result').textContent = convertedNumber;
}

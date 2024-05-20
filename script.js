function calculateSum() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);

    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('result').innerText = 'Mohon masukkan kedua bilangan dengan benar.';
    } else {
        const sum = number1 + number2;
        document.getElementById('result').innerText = 'Hasil: ' + sum;
    }
}

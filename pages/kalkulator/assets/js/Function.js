let currentInput = '';
let display = document.getElementById('display');

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(operator) {
    currentInput += ` ${operator} `;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.trim().slice(0, -1);
    display.innerText = currentInput || '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
    }
}

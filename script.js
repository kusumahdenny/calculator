class Calculator {
    constructor(currentOperandText, previousOperandText) {
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.clear()
    }

    clear() {
        this.previousOperand = ''
        this.currentOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {

    }

    calculate() {

    }

    updateDisplay() {
        this.currentOperandText.innerText = this.currentOperand
    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandText = document.querySelector('[data-previous]');
const currentOperandText = document.querySelector('[data-current]');

const calculator = new Calculator(previousOperandText, currentOperandText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

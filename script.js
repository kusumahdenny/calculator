class Calculator {
    constructor(currentOperandText, previousOperandText) {
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
    }

    clear() {

    }

    delete() {

    }

    appendNumber(number) {

    }

    chooseOperation(operation) {

    }

    calculate() {

    }

    updateDisplay() {

    }
}


const numberButton = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandText = document.querySelector('[data-previous]');
const currentOperandText = document.querySelector('[data-current]');

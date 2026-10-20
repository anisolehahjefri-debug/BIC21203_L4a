const userInput = document.getElementById('userInput');
const checkBtn = document.getElementById('checkBtn');
const result = document.getElementById('result');

function checkInput() {
    const inputValue = userInput.value.trim();

    if(inputValue === '') {
        result.textContent = 'Please enter a valid number!';
    }
    else if(isNaN(inputValue)) {
        result.textContent = 'Please enter a valid number!';
    }
    else if (isNaN(inputValue)){
        result.textContent = 'Please enter a valid number!';
    }
    else {
        const number = Number(inputValue);

        if(number < 10) {
            result.textContent = 'The number is less than 10.';
        }
        else if(number > 10) {
            result.textContent = 'The number is greater than 10.';
        }
        else {
            result.textContent = 'The number is equal to 10.';
        }
    }
}

checkBtn.addEventListener('click', checkInput);
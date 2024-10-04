let first_operation = [] //Stores the first part of the operation
let final_operation = [] //Stores the whole operation and should hold the current calculation
let operation = '';
let current_number = '';  
let last_result = null;
let input_box = document.querySelector('#output_box input');

function output(char) {
    if ((typeof char === 'number' || typeof char === 'string') && char !== '=' && char !== 'CE' && char !== 'C' && char !== 'Delete') {
        input_box.value += char;
    }
}

function calculation(char) {
    output(char)
    if (!isNaN(Number(char)) || char === '.') {
        if (char === '.' && current_number.includes('.')) {
            return; 
        }
        current_number += char; 
    } else if (['+', '-', '/', '*', '%'].includes(char)) {
        if (current_number !== '') {
            first_operation.push(Number(current_number));
            current_number = '';
        }else if(last_result !== null){
            first_operation.push(last_result)
        }
        // Checks for operators and makes sure its not one of the other equals / enter / delete etc buttons.
        operation = char
    }  else if (char == 'exponent') {
        let number = current_number !== '' ? Number(current_number) : (first_operation[0] || last_result);
        let result = number ** 2;
        input_box.value = result;
        last_result = result;
        current_number = '';
        first_operation = [];
    } else if (char == 'sqrt') {
        let number = current_number !== '' ? Number(current_number) : (first_operation[0] || last_result);
        let result = Math.sqrt(number);
        input_box.value = result;
        last_result = result;
        current_number = '';
        first_operation = [];
    } else if (char == 'CE') {
        first_operation = [];
        current_number = ''
        last_result = null
    } else if (char == 'C') {
        input_box.value = '';
        first_operation = [];
        final_operation = [];
        current_number = ''
        last_result = null
    } else if (char == 'Delete') {
        input_box.value = input_box.value.slice(0, -1);
        current_number = current_number.slice(0, -1);
    } else if(char === '='){
        if (current_number !== '') {
            first_operation.push(Number(current_number));
            current_number = '';
        }
        if (first_operation.length === 2) {
            let calc_result = 0;
            // Checks for the operation through the use of the operation parameter / variable initialized earlier, with the operator assigned to it during the respective conditional statement
            switch (operation) {
                case '+':
                    calc_result = first_operation[0] + first_operation[1];
                    break;
                case '-':
                    calc_result = first_operation[0] - first_operation[1];
                    break;

                case '/':
                    if (first_operation[1] !== 0) {
                        calc_result = first_operation[0] / first_operation[1];
                    } else {
                        console.log(`Can't divide by zero`);
                        input_box.value = `Can't divide by zero`;
                        return;
                    }
                    break;

                case '*':
                    calc_result = first_operation[0] * first_operation[1];
                    break;

                case '%':
                    // Finds percentage: first_operand is the base value, second_operand is the percentage to be applied.
                    calc_result = (first_operation[0] * first_operation[1]) / 100;
                    break;

                default:
                    console.log("Invalid operation");
                    return; // Stops execution if there's no valid operation
            }

            final_operation.push(calc_result)
            input_box.value = calc_result;
            last_result = calc_result;
            first_operation = [];
        }
    }
}
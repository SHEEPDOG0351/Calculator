let first_operation = [] //Stores the first part of the operation
let final_operation = [] //Stores the whole operation and should hold the current calculation
let operation = ''
let input_box = document.querySelector('#output_box input');
function output(char) {
    if ((typeof char === 'number' || typeof char === 'string') && char !== '=' && char !== 'CE' && char !== 'C' && char !== 'Delete') {
        input_box.value += char
    }
}


function calculation(char) {
    output(char)
    if (!isNaN(Number(char))) {
        first_operation.push(Number(char));}
    else if (['+', '-', '/', '*'].includes(char)) {
        // Checks for operators and makes sure its not one of the other equals / enter / delete etc buttons.
        operation = char
    } else if (char == 'exponent') {
        // Checks for the exponent button, then performs the operation
        let base = first_operation[0];
        let result = base ** 2;
        final_operation.push(result);
        input_box.value = result;
    } else if (char == 'sqrt') {
        // Checks for the sqrt button, then performs the square root operation on the number
        let number = first_operation[0];
        let result = Math.sqrt(number);
        final_operation.push(result);
        input_box.value = result;
    } else if (char == 'CE'){
        first_operation = [];
    } else if (char == 'C'){
        input_box.value = '';
        first_operation = [];
        final_operation = [];
    } else if (char == 'Delete'){
        input_box.value = input_box.value.slice(0, -1);
    }else if(char === '='){
        if(first_operation.length == 2){
            let calc_result = 0
        // Checks for the operation through the use of the operation parameter / variable initalized earlier, with the operator assigned to it duing the respective conditional statement
            switch (operation) {
                case '+':
                    calc_result = first_operation[0] + first_operation[1]
                    break;
            
                case '-':
                    calc_result = first_operation[0] - first_operation[1]
                    break;
            
                case '/':
                    calc_result = first_operation[0] / first_operation[1]
                    break;
                
                case '*':
                    calc_result = first_operation[0] * first_operation[1]
                    break;
        }

        final_operation.push(calc_result)
        input_box.value = calc_result;
    }
}}

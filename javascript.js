let first_operation = [] //Stores the first part of the operation
let final_operation = [] //Stores the whole operation and should hold the current calculation

let input_box = document.querySelector('#output_box input');
function output(char) {
    if (typeof char === 'number' || typeof char === 'string') {
        input_box.value += char
    }
}


function calculation(char) {
    output(char)
    let calculation = 0
    let operation = ''
    if (first_operation.length <= 2) {
        if (typeof char === "string") {
            if ((char === '+') || (char === '-') || (char === '/') || (char === '*')) {
                // Checks for operators and makes sure its not one of the other equals / enter / delete etc buttons.
                operation = char
            } else if (typeof char === 'number') {
                // Checks for if char is a number, if so, adds the number to the array
                first_operation.push(char)
            } else if (char == 'exponent') {
                // Checks for the exponent button, then performs the operation
                base = first_operation[0]
                result = base ** 2
            } else if (char == 'sqrt') {
                // Checks for the sqrt button, then performs the square root operation on the number
                number = first_operation[0]
                result = Math.sqrt(number)
            } 
            else {
                // Should work as the condition for checking for the equals operation
                return final_operation
            }
        }
    } else if (first_operation.length == 2){
        // Checks for the operation through the use of the operation parameter / variable initalized earlier, with the operator assigned to it duing the respective conditional statement
        switch (operation) {
            case '+':
                calculation = first_operation[0] + first_operation[1]
                break;
            
            case '-':
                calculation = first_operation[0] - first_operation[1]
                break;
            
            case '/':
                calculation = first_operation[0] / first_operation[1]
                break;
                
            case '*':
                calculation = first_operation[0] * first_operation[1]
                break;
        }

        final_operation.push(calculation)
    }
}

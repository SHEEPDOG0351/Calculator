let first_operation = [] //Stores the first part of the operation
let final_operation = [] //Stores the whole operation and should hold the current calculation

function calculation(char) {
    let calculation = 0
    let operation = ''
    if (first_operation.length <= 2) {
        if (typeof char === "string") {
            // Checks for operators and makes sure its not one of the other equals / enter / delete etc buttons.
            if ((char === '+') || (char === '-') || (char === '/') || (char === '*')) {
                operation = char
            } else if (typeof char === 'number') {
                first_operation.push(char)
            }
        }
    } else if (first_operation.length == 2){
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

    return final_operation
}
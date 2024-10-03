let first_operation = []
let final_operation = []


function calculation(char){
    let calculation = 0
    let operation = ""
    if(first_operation.length <= 3){
        if(typeof char === "string"){
            if((char === "+") || (char === "-") || (char === "*") || (char === "/")){
                operation = char
            }
            else if(typeofchar === "number"){
                first_operation.push(char)
            }
            else if(char === "exponent"){
                bsse = first_operation
                result = base ** 2
            }
            else if(char === "sqrt"){
                number = first_operation[0];
                result = Math.sqrt(number);
            }
            else{
                return final_operation}
            
        }
    }
    else if(first_operation.length == 2){
        switch (operation){
            case "+":
                calculation = first_operation[0] + first_operation[1]
                break;
            case "-":
                calculation = first_operation[0] - first_operation[1]
                break;
            case "*":
                calculation = first_operation[0] * first_operation[1]
                break;
            case "/":
                calculation = first_operation[0] / first_operation[1]
                break;
        }
    
        
        final_operation.push(calculation)
    }

}